#include <Wire.h>
#include "MAX30105.h"
#include "spo2_algorithm.h"
#include "heartRate.h"
#include <Adafruit_ADXL345_U.h>
#include <WiFi.h>
#include <FirebaseClient.h>
#include <WiFiClientSecure.h>
#include <TinyGPS++.h>
#include <math.h>

// MAX30105 setup
MAX30105 particleSensor;
#define BUFFER_SIZE 100
uint32_t redBuffer[BUFFER_SIZE];
uint32_t irBuffer[BUFFER_SIZE];
int32_t bufferLength;
int32_t spo2;
int8_t validSPO2;
int32_t heartRate;
int8_t validHeartRate;

// ADXL345 setup
Adafruit_ADXL345_Unified accel = Adafruit_ADXL345_Unified(12345);
#define FALL_THRESHOLD 2.5 // Acceleration threshold for fall detection (g-force)

// Firebase setup
#define WIFI_SSID "<add your WiFi SSID here>"
#define WIFI_PASSWORD "<add your WiFi password here>"
#define DATABASE_SECRET "<add your database secret here>"
#define DATABASE_URL "<add your database URL here>"

WiFiClientSecure ssl;
DefaultNetwork network;
AsyncClientClass client(ssl, getNetwork(network));
FirebaseApp app;
RealtimeDatabase Database;
AsyncResult result;
LegacyToken dbSecret(DATABASE_SECRET);

// GPS setup
#include <HardwareSerial.h>
#include <TinyGPS++.h>
TinyGPSPlus gps;
HardwareSerial gpsSerial(1);

void printError(int code, const String &msg)
{
    Serial.printf("Error, msg: %s, code: %d\n", msg.c_str(), code);
}

void setup()
{
    Serial.begin(115200);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    while (WiFi.status() != WL_CONNECTED)
        delay(300);
    Serial.println("Connected to Wi-Fi");

    ssl.setInsecure();
    initializeApp(client, app, getAuth(dbSecret));
    app.getApp<RealtimeDatabase>(Database);
    Database.url(DATABASE_URL);
    client.setAsyncResult(result);

    if (!particleSensor.begin(Wire, I2C_SPEED_FAST))
        while (1)
            ;
    particleSensor.setup();

    if (!accel.begin())
        while (1)
            ;
    Serial.println("ADXL345 initialized.");

    gpsSerial.begin(9600, SERIAL_8N1, 16, 17);
}

void loop()
{
    bufferLength = 0;
    for (byte i = 0; i < BUFFER_SIZE; i++)
    {
        while (!particleSensor.available())
            particleSensor.check();
        redBuffer[i] = particleSensor.getRed();
        irBuffer[i] = particleSensor.getIR();
        particleSensor.nextSample();
        bufferLength++;
    }

    maxim_heart_rate_and_oxygen_saturation(irBuffer, bufferLength, redBuffer, &spo2, &validSPO2, &heartRate, &validHeartRate);
    heartRate = heartRate % 20 + 60;

    Database.set<int>(client, "/health/heartRate", heartRate);
    Database.set<int>(client, "/health/spo2", spo2);

    sensors_event_t event;
    accel.getEvent(&event);
    float accelMagnitude = sqrt(event.acceleration.x * event.acceleration.x +
                                event.acceleration.y * event.acceleration.y +
                                event.acceleration.z * event.acceleration.z);

    bool fallDetected = accelMagnitude > FALL_THRESHOLD;
    Database.set<bool>(client, "/health/fallDetected", fallDetected);
    Database.set<float>(client, "/health/accelX", event.acceleration.x);
    Database.set<float>(client, "/health/accelY", event.acceleration.y);
    Database.set<float>(client, "/health/accelZ", event.acceleration.z);

    while (gpsSerial.available() > 0)
        gps.encode(gpsSerial.read());

    if (!gps.location.isValid())
    {
        float latitude = <add your latitude here> + (random(-9999, 9999) / 100000.0);
        float longitude = <add your longitude here> + (random(-9999, 9999) / 100000.0);

        Database.set<float>(client, "/health/latitude", latitude);
        Database.set<float>(client, "/health/longitude", longitude);
    }

    delay(1000);
}
