import React from "react";
import { useState } from "react";
import { useRef } from "react";

export default function Suhu() {
  const tempRef1 = useRef();
  const tempRef2 = useRef();
  const [value, setValue] = useState(0);
  const [hasil, setHasil] = useState();

  const submit = (e) => {
    e.preventDefault();

    const conversions = {
      celcius: {
        fahrenheit: (val) => (parseFloat(val) * 9) / 5 + 32,
        kelvin: (val) => parseFloat(val) + 273.15,
      },
      fahrenheit: {
        celcius: (val) => ((parseFloat(val) - 32) * 5) / 9,
        kelvin: (val) => ((parseFloat(val) - 32) * 5) / 9 + 273.15,
      },
      kelvin: {
        celcius: (val) => parseFloat(val) - 273.15,
        fahrenheit: (val) => ((parseFloat(val) - 273.15) * 9) / 5 + 32,
      },
    };

    const from = tempRef1.current.value;
    const to = tempRef2.current.value;

    if (isNaN(value)) return setHasil("Error: Input harus berupa angka.");

    if (from == to)
      return setHasil(
        `Hasil konversi: ${value} ${to.charAt(0).toUpperCase() + to.slice(1)}`
      );
    const result = conversions[from][to](value);
    setHasil(
      `Hasil konversi: ${result} ${to.charAt(0).toUpperCase() + to.slice(1)}`
    );
  };
  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="temperature">Pilih Suhu:</label>
        <select id="temperature" ref={tempRef1}>
          <option value="celcius">Celcius</option>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>

        <span> ke </span>

        <select id="temperature" ref={tempRef2}>
          <option value="fahrenheit">Fahrenheit</option>
          <option value="kelvin">Kelvin</option>
          <option value="celcius">Celcius</option>
        </select>
        <input type="text" onChange={(e) => setValue(e.target.value)} />

        <button type="submit">submit</button>
      </form>

      {hasil && <p>{hasil}</p>}
    </div>
  );
}
