import React, { useCallback } from "react";
import { Cart } from "./index";
import "../App.css";

const Carts = ({ allCarts, setAllCarts }) => {

  console.log("Carts");

  const handleAddInput = () => {
    setAllCarts([
      ...allCarts,
      { id: Date.now(), ingredients: [], cartCount: 1 },
    ]);
  };

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
      <button onClick={handleAddInput}>入力欄を追加</button>
    </div>
  );
};

export default Carts;
