import React from "react";
import { useState } from "react";

export default function BMI() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  const calculateBMI = () => {
    const convertedHeight = height / 100;
    const bmi = weight / (convertedHeight * convertedHeight);
    const categories = [
      { min: 0, max: 18.4, label: "Kurus (Underweight)" },
      { min: 18.5, max: 24.9, label: "Normal (Healthy weight)" },
      { min: 25, max: 29.9, label: "Gemuk (Overweight)" },
      { min: 30, max: Infinity, label: "Obesitas (Obesity)" },
    ];

    if (convertedHeight > 0 && weight > 0) {
      const category = categories.find(
        (category) => bmi >= category.min && bmi <= category.max
      );
      setResult(`BMI Anda adalah ${bmi.toFixed(2)} (${category.label})`);
    } else {
      setResult("Masukkan tinggi dan berat badan yang valid.");
    }
  };

  return (
    <div>
      <form action="">
        <label for="height">Tinggi (cm):</label>
        <input
          type="number"
          id="height"
          required
          onChange={(e) => setHeight(e.target.value)}
        />
        <label for="weight">Berat (kg):</label>
        <input
          type="number"
          id="weight"
          required
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="button" onClick={calculateBMI}>
          Hitung BMI
        </button>

        <p>{result}</p>
      </form>
    </div>
  );
}
