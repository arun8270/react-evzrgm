import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

// Helper function for BMI calculation
const calculateBMI = (weight, height) => {
  if (!weight || !height) return null;

  const heightInMeters = height / 100;
  const bmiValue = weight / (heightInMeters * heightInMeters);
  return bmiValue.toFixed(2);
};

// Helper function to determine BMI status
const getBMIStatus = (bmi) => {
  if (bmi < 18.5) return 'Less Weight';
  if (bmi >= 18.5 && bmi < 24.9) return 'Normal Weight';
  if (bmi >= 25 && bmi < 30) return 'Over Weight';
  return 'Obese';
};

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError] = useState('');

  const bmi = useMemo(() => calculateBMI(weight, height), [weight, height]);
  const bmiStatus = useMemo(() => getBMIStatus(bmi), [bmi]);

  const handleCalculateBMI = () => {
    if (!weight || !height) {
      setError('Enter valid height and weight to calculate BMI');
    } else {
      setError('');
    }
  };

  const handleClear = () => {
    setWeight('');
    setHeight('');
  };

  return (
    <div className="bmi-container">
      <div className="box"></div>
      <div className="data">
        <h1>BMI Calculator</h1>
        {error && <p className="error">{error}</p>}
        <div className="input-container">
          <label htmlFor="height">Height (CM): </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="weight">Weight (KG): </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button onClick={handleCalculateBMI}>Calculate BMI</button>
        <button className="clear" onClick={handleClear}>
          Clear
        </button>
        {bmi !== null && (
          <div className="result">
            <p>Your BMI is: {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BMICalculator />);