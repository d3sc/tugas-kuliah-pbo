import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import JkwCalculator from "../helpers/jkw"; 

export default function Jkw() {
  const [jarak, setJarak] = useState("");  
  const [kecepatan, setKecepatan] = useState(""); 
  const [waktu, setWaktu] = useState(""); 
  const [hasil, setHasil] = useState("");
  const [option, setOption] = useState("J-K"); 

  const submit = (e) => {
    e.preventDefault();
    const calculator = new JkwCalculator(jarak, kecepatan, waktu, option);

    if ((option === "J-K" && (!jarak || !kecepatan)) || 
        (option === "J-W" && (!jarak || !waktu)) ||
        (option === "K-W" && (!kecepatan || !waktu))) {
      setHasil("Error: Harap Periksa Input Anda");
      return;
    }

    const result = calculator.calculate();
    if (result.error) {
      setHasil(result.error);
    } else {
      setHasil(`Hasil: ${result.result} ${result.unit}`);
    }
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
          <h1 className="text-2xl font-bold text-center flex-1">Jarak Kecepatan Waktu</h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label htmlFor="option" className="block text-sm font-medium mb-1">
              Pilih Perhitungan:
            </label>
            <select
              id="option"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            >
              <option value="J-K">Mencari Jarak (J-K)</option>
              <option value="J-W">Mencari Waktu (J-W)</option>
              <option value="K-W">Mencari Kecepatan (K-W)</option>
            </select>
          </div>

          {/* Conditionally render input fields based on the selected option */}
          {option === "J-K" && (
            <>
              <div>
                <label htmlFor="kecepatan" className="block text-sm font-medium mb-1">
                  Kecepatan (km/jam):
                </label>
                <input
                  type="text"
                  id="kecepatan"
                  placeholder="Masukkan Kecepatan"
                  value={kecepatan}
                  onChange={(e) => setKecepatan(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>

              <div>
                <label htmlFor="waktu" className="block text-sm font-medium mb-1">
                  Waktu (jam):
                </label>
                <input
                  type="text"
                  id="waktu"
                  placeholder="Masukkan Waktu"
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>
            </>
          )}

          {option === "J-W" && (
            <>
              <div>
                <label htmlFor="jarak" className="block text-sm font-medium mb-1">
                  Jarak (km):
                </label>
                <input
                  type="text"
                  id="jarak"
                  placeholder="Masukkan Jarak"
                  value={jarak}
                  onChange={(e) => setJarak(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>

              <div>
                <label htmlFor="kecepatan" className="block text-sm font-medium mb-1">
                  Kecepatan (km/jam):
                </label>
                <input
                  type="text"
                  id="kecepatan"
                  placeholder="Masukkan Kecepatan"
                  value={kecepatan}
                  onChange={(e) => setKecepatan(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>
            </>
          )}

          {option === "K-W" && (
            <>
              <div>
                <label htmlFor="jarak" className="block text-sm font-medium mb-1">
                  Jarak (km):
                </label>
                <input
                  type="text"
                  id="jarak"
                  placeholder="Masukkan Jarak"
                  value={jarak}
                  onChange={(e) => setJarak(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>

              <div>
                <label htmlFor="waktu" className="block text-sm font-medium mb-1">
                  Waktu (jam):
                </label>
                <input
                  type="text"
                  id="waktu"
                  placeholder="Masukkan Waktu"
                  value={waktu}
                  onChange={(e) => setWaktu(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-md font-semibold"
          >
            Hitung
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
