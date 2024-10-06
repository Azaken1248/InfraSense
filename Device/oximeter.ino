#include <Wire.h>
#include "MAX30105.h"
#include "spo2_algorithm.h"
#include "heartRate.h"
#include <LiquidCrystal_I2C.h> // Include the I2C LCD library

// MAX30105 setup
MAX30105 particleSensor;

#define BUFFER_SIZE 100
uint32_t redBuffer[BUFFER_SIZE]; // Buffer for storing red LED sensor data
uint32_t irBuffer[BUFFER_SIZE];  // Buffer for storing IR LED sensor data
int32_t bufferLength;            // Data length
int32_t spo2;                    // SPO2 value
int8_t validSPO2;                // Indicator to show if the SPO2 calculation is valid
int32_t heartRate;               // Heart rate value calculated as per Maxim's algorithm
int8_t validHeartRate;           // Indicator to show if the heart rate calculation is valid

// Firebase setup
// Uncomment after testing sensor and LCD

#include <WiFi.h>
#include <FirebaseClient.h>
#include <WiFiClientSecure.h>

#define WIFI_SSID "your_wifi_ssid"         // Replace with your Wi-Fi SSID
#define WIFI_PASSWORD "your_wifi_password" // Replace with your Wi-Fi password

#define DATABASE_SECRET "your_database_secret" // Replace with your Firebase Database secret
#define DATABASE_URL "your_database_url"       // Replace with your Firebase Database URL

WiFiClientSecure ssl;
DefaultNetwork network;
AsyncClientClass client(ssl, getNetwork(network));
FirebaseApp app;
RealtimeDatabase Database;
AsyncResult result;
LegacyToken dbSecret(DATABASE_SECRET);

// LCD setup (change 0x27 to your LCD's I2C address if different)
LiquidCrystal_I2C lcd(0x27, 16, 2);

void printError(int code, const String &msg)
{
    Serial.printf("Error, msg: %s, code: %d\n", msg.c_str(), code);
}

void setup()
{
    // Initialize serial and LCD
    Serial.begin(9600);

    // Initialize Wi-Fi (for later Firebase use, can be skipped for now)

    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

    Serial.println("Connecting to Wi-Fi...");
    while (WiFi.status() != WL_CONNECTED)
    {
        delay(300);
        Serial.print(".");
    }
    Serial.println("Connected to Wi-Fi");

    ssl.setInsecure();
    initializeApp(client, app, getAuth(dbSecret));
    app.getApp<RealtimeDatabase>(Database);
    Database.url(DATABASE_URL);
    client.setAsyncResult(result);

    // Initialize the MAX30105 sensor
    if (!particleSensor.begin(Wire, I2C_SPEED_FAST))
    {
        Serial.println("MAX30105 initialization failed!");
        while (1)
            ;
    }
    particleSensor.setup();

    // Initialize the LCD
    lcd.init();
    lcd.backlight();
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Initializing...");

    delay(1000); // Small delay before starting
    Serial.println("Setup done.");
}

void loop()
{
    bufferLength = 0; // Reset buffer length

    // Read samples from MAX30105
    for (byte i = 0; i < BUFFER_SIZE; i++)
    {
        while (particleSensor.available() == false)
        {
            particleSensor.check(); // Wait for new data
        }

        // Store readings in buffers
        redBuffer[i] = particleSensor.getRed();
        irBuffer[i] = particleSensor.getIR();
        particleSensor.nextSample(); // Move to the next sample
        bufferLength++;
    }

    // Calculate heart rate and SpO2
    maxim_heart_rate_and_oxygen_saturation(irBuffer, bufferLength, redBuffer, &spo2, &validSPO2, &heartRate, &validHeartRate);

    // Debug: Print heart rate and SpO2 to Serial
    Serial.print("Heart Rate: ");
    Serial.println(validHeartRate ? String(heartRate) : "Invalid reading");
    Serial.print("SpO2: ");
    Serial.println(validSPO2 ? String(spo2) : "Invalid reading");

    // Display on LCD
    lcd.clear();
    lcd.setCursor(0, 0);
    if (validHeartRate)
    {
        lcd.print("Heart Rate: ");
        lcd.print(heartRate);
    }
    else
    {
        lcd.print("HR: Invalid");
    }

    lcd.setCursor(0, 1);
    if (validSPO2)
    {
        lcd.print("SpO2: ");
        lcd.print(spo2);
    }
    else
    {
        lcd.print("SpO2: Invalid");
    }

    // Firebase data sending (uncomment when needed)

    bool status = Database.set<int>(client, "/health/heartRate", heartRate);
    if (status)
        Serial.println("Heart Rate sent to Firebase");
    else
        printError(client.lastError().code(), client.lastError().message());

    status = Database.set<int>(client, "/health/spo2", spo2);
    if (status)
        Serial.println("SpO2 sent to Firebase");
    else
        printError(client.lastError().code(), client.lastError().message());

    delay(6000);
}
