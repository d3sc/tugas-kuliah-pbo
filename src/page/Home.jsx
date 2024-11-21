import React from "react";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="grid grid-cols-2 gap-4">
        <a
          href="BMI"
          className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center"
        >
          <span className="text-xl font-bold">BMI</span>
        </a>

        <a
          href="Jkw"
          className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center"
        >
          <span className="text-xl font-bold">Jarak <br/> Kecepatan <br/> Waktu</span>
        </a>

        <a
          href="Suhu"
          className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center"
        >
          <span className="text-xl font-bold">Suhu</span>
        </a>

        <a
          href="Diskon"
          className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center"
        >
          <span className="text-xl font-bold">Diskon</span>
        </a>
      </div>
    </div>
  );
}
