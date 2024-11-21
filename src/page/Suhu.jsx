import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import TemperatureConverter from "../helpers/suhuConverter";
import { FaHome } from "react-icons/fa";

export default function Suhu() {
  const tempRef1 = useRef();
  const tempRef2 = useRef();
  const [value, setValue] = useState("");
  const [hasil, setHasil] = useState("");
  const converter = new TemperatureConverter();

  const submit = (e) => {
    e.preventDefault();

    const from = tempRef1.current.value;
    const to = tempRef2.current.value;

    if (!value || isNaN(value)) {
      setHasil("Error: Input must be a number.");
      return;
    }

    if (from === to) {
      setHasil(`Conversion result: ${value} ${to.charAt(0).toUpperCase() + to.slice(1)}`);
      return;
    }

    const result = converter.convert(value, from, to);
    setHasil(`Conversion result: ${result.toFixed(2)} ${to.charAt(0).toUpperCase() + to.slice(1)}`);
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
          <h1 className="text-2xl font-bold text-center flex-1">Temperature Converter</h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor="from-temperature" className="block text-sm font-medium mb-1">
              From:
            </label>
            <select
              id="from-temperature"
              ref={tempRef1}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            >
              <option value="celcius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
              <option value="reamur">Reamur</option>
            </select>
          </div>
          <div>
            <label htmlFor="to-temperature" className="block text-sm font-medium mb-1">
              To:
            </label>
            <select
              id="to-temperature"
              ref={tempRef2}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            >
              <option value="fahrenheit">Fahrenheit</option>
              <option value="kelvin">Kelvin</option>
              <option value="celcius">Celsius</option>
              <option value="reamur">Reamur</option>
            </select>
          </div>
          <div>
            <label htmlFor="value" className="block text-sm font-medium mb-1">
              Temperature Value:
            </label>
            <input
              type="number"
              id="value"
              placeholder="Masukan Nilai Temperatur"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-md font-semibold"
          >
            Convert
          </button>
        </form>
        {hasil && (
          <p
            className={`mt-4 text-center ${hasil.startsWith("Error") ? "text-red-500" : "text-green-500"}`}
          >
            {hasil}
          </p>
        )}
      </div>
    </div>
  );
}
