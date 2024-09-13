import React from "react";
import useCart from "../hooks/useCart";

const IngredientInput = React.memo(
  ({
    allCarts,
    setAllCarts,
    cartNumber,
    cartID,
  }) => {
    const {
      inputText,
      handleInputChange,
      handleClear,
      handleRemove,
      hadleCartCountChange,
    } = useCart({allCarts, setAllCarts, cartID});

    console.log(`IngredientInput${cartNumber}`);

    return (
      <div>
        <h2>カート{cartNumber + 1}</h2>
        <div>材料リストを入力：</div>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder={`例:\nにんじん 2本\nタマネギ 3個\n醤油 50ml`}
          rows="30"
          cols="50"
        />
        <div>
          <button onClick={handleClear}>クリア</button>
          <button onClick={handleRemove}>×</button>
        </div>
        <div>カート台数：</div>
        <input
          type="number"
          min="0"
          defaultValue="1"
          onChange={hadleCartCountChange} 
        />
      </div>
    );
  }
);

export default IngredientInput;
