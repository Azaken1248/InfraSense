import React, { useEffect, useState } from 'react';
import { fetchFirebaseData } from './firebase/firebaseUtils';
import './App.css';
import CircularProgressBar from './components/CircularProgressBar';
import Loader from './components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faWater, faComments } from '@fortawesome/free-solid-svg-icons';
import MapView from './components/MapView';
import AccelerometerVisualization from './components/AccelerometerVizualization';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [fallDetected, setFallDetected] = useState(false);

  useEffect(() => {
    const unsubscribe = fetchFirebaseData(
      (fetchedData) => {
        setData(fetchedData);
        setTimeout(() => setLoading(false), 3000);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (data && data.accelY < -3 && !fallDetected) {
      setFallDetected(true);
      toast.warn('Fall detected! Check the patient immediately.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setTimeout(() => setFallDetected(false), 10000); // Reset after 10 sec
    }
  }, [data, fallDetected]);

  const getFeedback = () => {
    if (!data) return "Loading feedback...";
    
    let feedback = "";
    if (data.heartRate < 60) {
      feedback += "Heart rate is low. Consider seeking medical advice. ";
    } else if (data.heartRate > 100) {
      feedback += "Heart rate is high. Consider resting and staying hydrated. ";
    } else {
      feedback += "Heart rate is normal. Keep maintaining a healthy lifestyle. ";
    }
    
    if (data.spo2 < 90) {
      feedback += "Low SpO2 detected. Consider checking oxygen levels and consulting a doctor. ";
    } else {
      feedback += "SpO2 levels are within a safe range. ";
    }
    
    if (Math.abs(data.accelX) > 2 || Math.abs(data.accelY) > 2 || Math.abs(data.accelZ) > 2) {
      feedback += "Sudden movement detected. Stay cautious of falls and injuries.";
    } else {
      feedback += "Motion is stable. No sudden movements detected.";
    }
    
    return feedback;
  };

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="content">
      <ToastContainer />
      
      {/* Header */}
      <header className="app-header">
        <h1>Health Dashboard</h1>
      </header>

      {/* Health Report */}
      <div className="report-container">
        <div className="data-section">
          <h2><FontAwesomeIcon icon={faHeart} style={{ color: 'red', marginRight: '10px' }} />Heart Rate</h2>
          <CircularProgressBar value={Math.max(0, data.heartRate)} unit=" bpm" type={0} />
        </div>

        <div className="data-section">
          <h2><FontAwesomeIcon icon={faWater} style={{ color: 'blue', marginRight: '10px' }} />SpO2 Level</h2>
          <CircularProgressBar value={Math.max(0, data.spo2)} unit=" %" type={1} />
        </div>
      </div>

      {/* Map and Sensor Data */}
      <div className="sensor-section">
        <h2>Location Data</h2>
        <div className="map-container">
          <MapView latitude={data.latitude} longitude={data.longitude} />
        </div>
      </div>

      <div className="sensor-section">
        <h2>Motion Sensor Data</h2>
        <AccelerometerVisualization x={data.accelX} y={data.accelY} z={data.accelZ} />
      </div>

      {/* Feedback Section */}
      <div className="feedback-section">
        <h2><FontAwesomeIcon icon={faComments} style={{ marginRight: '10px' }} /> Health Feedback</h2>
        <p>{getFeedback()}</p>
      </div>
      
      {/* Footer */}
      <footer>Health Report powered by Firebase and ESP32</footer>
    </div>
  );
};

export default App;
