import React from "react";
import { Cart } from "../index";
import useCarts from "./useCarts";
import "../../App.css";

const Carts = ({ allCarts, setAllCarts }) => {
  console.log("Carts");

  const { hasMaxCarts, handleAddInput } = useCarts({ allCarts, setAllCarts });
  
  return (
    <div>
      <div className="input-group-container">
        {allCarts.map((cart, index) => (
          <div key={cart.id} className="input-group">
            <Cart
              allCarts={allCarts}
              setAllCarts={setAllCarts}
              cartID={cart.id}
              cartNumber={index}
            />
          </div>
        ))}
      </div>
      <button onClick={handleAddInput} disabled={hasMaxCarts()}>
        入力欄を追加
      </button>
    </div>
  );
};

export default Carts;
