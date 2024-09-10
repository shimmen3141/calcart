import React, { useState } from "react";
import IngredientInput from "./IngredientInput";
import "../App.css";

const IngredientsContainer = ({ allCarts, setAllCarts }) => {

  const handleIngredientChange = (id, newIngredients) => {
    const newAllCarts = allCarts.map((cart) =>
      cart.id === id ? { ...cart, ingredients: newIngredients } : cart
    );
    setAllCarts(newAllCarts);
  };

  const handleCartCountChange = (id, newCartCount) => {
    const newAllCarts = allCarts.map((cart) =>
      cart.id === id ? { ...cart, cartCount: newCartCount } : cart
    );
    setAllCarts(newAllCarts);
  };

  const handleClearInput = (id) => {
    const newAllCarts = allCarts.map((cart) =>
      cart.id === id ? { ...cart, ingredients: [] } : cart
    );
    setAllCarts(newAllCarts);
  };

  const handleRemoveInput = (id) => {
    const newAllCarts = allCarts.filter((cart) => cart.id !== id);
    setAllCarts(newAllCarts);
  };

  const handleAddInput = () => {
    setAllCarts([
      ...allCarts,
      { id: Date.now(), ingredients: [], cartCount: 1 },
    ]);
  };

  return (
    <div>
      <div className="input-group-container">
        {allCarts.map((cart) => (
          <div key={cart.id} className="input-group">
            <IngredientInput
              cartID={cart.id}
              onChange={(newIngredients) =>
                handleIngredientChange(cart.id, newIngredients)
              }
              onClear={() => handleClearInput(cart.id)}
              onRemove={() => handleRemoveInput(cart.id)}
            />
            <div>カート台数：</div>
            <input
              type="number"
              min="0"
              defaultValue="1"
              onChange={(event) =>
                handleCartCountChange(cart.id, Number(event.target.value))
              }
            />
          </div>
        ))}
      </div>
      <button onClick={handleAddInput}>入力欄を追加</button>
    </div>
  );
};

export default IngredientsContainer;
