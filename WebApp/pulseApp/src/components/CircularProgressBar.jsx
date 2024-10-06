import React from 'react';
import '../styles/CircularProgressBar.css';

const CircularProgressBar = ({ value, unit, type }) => {
  const radius = 70; // Increased radius
  const strokeWidth = 12; // Adjusted stroke width for a bigger circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  const color = type === 0 ? '#ed4245' : '#7289da';

  return (
    <div className="progress-container">
      {/* Blurred layer for the glow effect */}
      <svg width="160" height="160" className="progress-ring blurred-ring">
        <circle
          className="progress-ring__circle-bg"
          stroke="transparent"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="80" // Updated cx and cy for the larger circle
          cy="80"
        />
        <circle
          className="progress-ring__circle"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="80" // Updated cx and cy for the larger circle
          cy="80"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      {/* Main layer */}
      <svg width="160" height="160" className="progress-ring">
        <circle
          className="progress-ring__circle-bg"
          stroke="transparent"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx="80" // Updated cx and cy for the larger circle
          cy="80"
        />
        <circle
          className="progress-ring__circle"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="80" // Updated cx and cy for the larger circle
          cy="80"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>

      <div className="progress-value" style={{ color }}>
        {value}{unit}
      </div>
    </div>
  );
};

export default CircularProgressBar;
