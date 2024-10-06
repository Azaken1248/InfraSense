import React, { useEffect, useState } from 'react';
import { fetchFirebaseData } from './firebase/firebaseUtils';
import './App.css';
import CircularProgressBar from './components/CircularProgressBar';
import Loader from './components/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faWater } from '@fortawesome/free-solid-svg-icons'; 

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = fetchFirebaseData(
      (fetchedData) => {
        setData(fetchedData); 
        setTimeout(() => {setLoading(false)},3000);
      },
      (err) => {
        setError(err.message); 
        setLoading(false);
      }
    );

    return () => {
      if (unsubscribe) {
        unsubscribe(); 
      }
    };
  }, []);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const getFeedback = () => {
    const { heart_rate, spo2 } = data;
    let feedback = '';

    if (heart_rate < 60) {
      feedback += 'Your heart rate is a bit low. Consider some light physical activity or breathing exercises. ';
    } else if (heart_rate > 100) {
      feedback += 'Your heart rate is high. Try relaxing or meditating. ';
    } else {
      feedback += 'Your heart rate is in a healthy range. Keep up the good work! ';
    }

    if (spo2 < 90) {
      feedback += 'Your oxygen level is low. Take deep breaths, or try a humidifier. Seek medical advice if it remains low.';
    } else {
      feedback += 'Your oxygen level is normal. Continue with your healthy habits!';
    }

    return feedback;
  };

  const getExerciseRecommendations = () => {
    const { heart_rate, spo2 } = data;
    if (heart_rate < 60 || spo2 < 90) {
      return 'Consider light exercises like walking, yoga, or breathing exercises to improve your heart rate and oxygen level.';
    } else if (heart_rate > 100) {
      return 'It is recommended to avoid strenuous activity and focus on relaxation techniques like meditation or stretching.';
    }
    return 'Maintain your current exercise routine, including aerobic exercises like jogging, swimming, or cycling to keep your cardiovascular health in check.';
  };

  return (
    <div className="content">
      {/* Header Section */}
      <header className="app-header">
        <h1>Health Dashboard</h1>
      </header>

      {/* Health Report Section */}
      <div className="report-container">
        {/* Heart Rate Section */}
        <div className="data-section">
          <h2>
            <FontAwesomeIcon icon={faHeart} style={{ color: 'red', marginRight: '10px' }} />
            Heart Rate
          </h2>
          <CircularProgressBar value={data.heartRate < 0 ? 0 : data.heartRate} unit={" bpm"} type={0} />
        </div>

        {/* SpO2 Section */}
        <div className="data-section">
          <h2>
            <FontAwesomeIcon icon={faWater} style={{ color: 'blue', marginRight: '10px' }} />
            SpO2 Level
          </h2>
          <CircularProgressBar value={data.spo2 < 0 ? 0 : data.spo2} unit=" %" type={1} />
        </div>
      </div>

      <section className="feedback-section">
        <h3>Health Feedback</h3>
        <p>{getFeedback()}</p>
      </section>

      <section className="recommendations-section">
        <h3>Recommended Exercises & Remedies</h3>
        <p>{getExerciseRecommendations()}</p>
      </section>

      <footer>Health Report powered by Firebase and ESP32</footer>
    </div>
  );
};

export default App;
