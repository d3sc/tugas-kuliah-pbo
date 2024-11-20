import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center bg-black min-h-screen text-white">
      <div className="grid grid-cols-2 gap-4">
        <a
          href="BMI"
          className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center"
        >
          <span className="text-xl font-bold">BMI</span>
        </a>

        <a
          href="Kecepatan"
          className="flex justify-center items-center bg-gray-800 rounded-lg w-40 h-40 text-center"
        >
          <span className="text-xl font-bold">Kecepatan</span>
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
