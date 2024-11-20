import React from "react";
import { useState } from "react";
import formatInputToRupiah from "../helpers/formatInputToRupiah";
import { useRef } from "react";

export default function Diskon() {
  const [price, setPrice] = useState("");
  const diskonRef = useRef();
  const [hasil, setHasil] = useState();

  const submit = (e) => {
    e.preventDefault();
    let priceConvert = parseInt(price.replace(/\./g, ""), 10);

    const discount = diskonRef.current.value;
    const discountAmount = (priceConvert * discount) / 100;
    const finalPrice = priceConvert - discountAmount;
    setHasil(
      `Harga setelah diskon ${discount}% menjadi Rp.${formatInputToRupiah(
        finalPrice.toString()
      )}`
    );
  };
  return (
    <div>
      <form action="" onSubmit={submit}>
        <label htmlFor="originalPrice">Harga Asli:</label>
        <input
          type="text"
          id="originalPrice"
          onChange={(e) => setPrice(formatInputToRupiah(e.target.value))}
          required
          value={price}
        />
        <label htmlFor="discount">Diskon (%):</label>
        <input type="number" id="discount" required ref={diskonRef} />
        <button type="submit">Hitung Diskon</button>
      </form>

      {hasil && <p>{hasil}</p>}
    </div>
  );
}
