import React, { useState } from "react";
import "./DiabeticForm.css";

const DiabeticForm = () => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // later you'll send it to your ML model/backend
  };

  return (
    <div className="form-container">
      <h2>Diabetic Prediction Form</h2>
      <form onSubmit={handleSubmit} className="diabetic-form">
        {Object.keys(formData).map((field) => (
          <div className="form-group" key={field}>
            <label>{field}</label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Predict</button>
      </form>
    </div>
  );
};

export default DiabeticForm;
