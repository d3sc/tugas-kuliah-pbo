import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import DiskonCalculator from "../helpers/diskonCalculator";
import formatInputToRupiah from "../helpers/formatInputToRupiah";
import { FaHome } from "react-icons/fa";

export default function Diskon() {
  const [harga, setHarga] = useState(""); 
  const diskonRef = useRef();
  const [hasil, setHasil] = useState("");

  const submit = (e) => {
    e.preventDefault();

    const diskon = parseFloat(diskonRef.current.value);

    if (!harga || isNaN(harga.replace(/\./g, "")) || isNaN(diskon)) {
      setHasil("Error: Input harga or diskon is invalid.");
      return;
    }

    const diskonCalculator = new DiskonCalculator(harga, diskon);
    const result = diskonCalculator.getHasil();
    setHasil(result);
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
          <h1 className="text-2xl font-bold text-center flex-1">Discount Calculator</h1>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="originalHarga">
              Harga Asli:
            </label>
            <input
              type="number"
              min="0"
              id="originalHarga"
              onChange={(e) => setHarga(formatInputToRupiah(e.target.value))}
              required
              value={harga}
              placeholder="Masukan Harga Sebelum Diskon"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="diskon">
              Diskon (%):
            </label>
            <input
              type="number"
              min="0"
              id="diskon"
              required
              ref={diskonRef}
              placeholder="Masukan Besar Diskon"
              className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-md font-semibold"
          >
            Hitung Diskon
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
