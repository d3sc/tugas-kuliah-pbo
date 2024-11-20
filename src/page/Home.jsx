import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen text-white">
      <div className="grid grid-cols-2 gap-4">

        <div className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center">
          <a href="BMI" className="text-xl font-bold">BMI</a>
        </div>


        <div className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center">
          <a href="Kecepatan" className="text-xl font-bold">Kecepatan</a>
        </div>


        <div className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center">
          <a href="Suhu" className="text-xl font-bold">Suhu</a>
        </div>

        <div className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center">
          <a href="Diskon" className="text-xl font-bold">Diskon</a>
        </div>
      </div>
    </div>
  );
}
