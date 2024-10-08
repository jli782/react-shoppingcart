import { useState } from "react";
import PropTypes from "prop-types";

export default function NumInput({ min, quantity, setAdded }) {
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
          setAdded(false);
          if (parseInt(e.target.value) > 0)
            quantity.setQuantity(e.target.value.replace(/^0*/, ""));
        }}
        data-testid="numinput"
      />
    </>
  );
}

NumInput.propTypes = {
  min: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired || PropTypes.string.isRequired,
  setAdded: PropTypes.func.isRequired,
};

NumInput.defaultProps = {
  min: 0,
  quantity: 1 || `1`,
  setAdded: () => 1,
};
