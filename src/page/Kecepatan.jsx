import React from "react";

export default function Kecepatan() {
  return (
    <div>
      <form action="">
        <label for="speed">Masukkan kecepatan (km/jam):</label>
        <input type="number" id="speed" required />
        <button type="submit">Konversi</button>
      </form>
    </div>
  );
}
