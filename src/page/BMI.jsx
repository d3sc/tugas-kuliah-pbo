import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import BMICalculator from "../helpers/bmiCalculator"; 

export default function BMI() {
  const [tinggi, setTinggi] = useState(0);
  const [berat, setBerat] = useState(0);
  const [hasil, setHasil] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const bmiCalculator = new BMICalculator(berat, tinggi);
    

    const hasil = bmiCalculator.getHasil();
    setHasil(hasil);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="bg-gray-800 rounded-3xl p-8 shadow-lg w-96 relative">
        <div className="flex items-center justify-between mb-6">
          <Link to="/">
            <button className="p-2 bg-blue-500 rounded-full text-white">
              <FaHome className="text-2xl" />
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-center flex-1">BMI Calculator</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="tinggi" className="block text-sm font-medium mb-1">
              Tinggi (cm):
            </label>
            <input
              type="number"
              min="0"
              id="tinggi"
              required
              onChange={(e) => setTinggi(e.target.value)}
              placeholder="Masukan Tinggi Badan Anda"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label htmlFor="berat" className="block text-sm font-medium mb-1">
              Berat (kg):
            </label>
            <input
              type="number"
              id="berat"
              required
              onChange={(e) => setBerat(e.target.value)}
              placeholder="Masukan Berat Badan Anda"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-md font-semibold"
          >
            Hitung BMI
          </button>
        </form>
        {hasil && (
          <p
            className={`mt-4 text-center ${hasil.startsWith("Masukkan") ? "text-red-500" : "text-green-500"}`}
          >
            {hasil}
          </p>
        )}
      </div>
    </div>
  );
}
