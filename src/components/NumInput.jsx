import { useState } from "react";

export default function NumInput({ min }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <label>
        <b>Quantity: </b>
      </label>
      <input
        name="quantity"
        // defaultValue={quantity > 0 ? quantity : 1}
        value={quantity}
        min={min}
        type="number"
        onChange={(e) => {
          console.log(quantity, `quantity`);
          setQuantity(e.target.value);
        }}
      />
    </>
  );
}
