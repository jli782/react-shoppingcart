import { useState } from "react";

export default function NumInput({ min, quantity }) {
  // const [quantity, setQuantity] = useState(0);

  return (
    <>
      <label>
        <b>Quantity: </b>
      </label>
      <input
        name="quantity"
        // defaultValue={quantity > 0 ? quantity : 1}
        value={quantity.quantity}
        min={min}
        type="number"
        onChange={(e) => {
          console.log(quantity.quantity, `quantity`);

          if (parseInt(e.target.value) > 0)
            quantity.setQuantity(e.target.value);
        }}
      />
    </>
  );
}
