import React, { useState } from "react";
import fullWidthToHalfWidth from "../functions/fullWidthToHalfWidth";
import fractionToDecimal from "../functions/fractionToDecimal";
import spoonToGram from "../functions/spoonToGram";

const IngredientInput = React.memo(({
  cart,
  onChange,
  cartNumber,
  cartID,
  onClear,
  onRemove,
}) => {

  console.log(`IngredientInput${cartNumber}`);

  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);

    const lines = text
      .split("\n")
      .filter((line) => line.trim()) // 空行を無視
      .map((line) => fullWidthToHalfWidth(line)) // 全角を半角に変換
      .map((line) => fractionToDecimal(line)); // 分数を小数に変換

    const parsedIngredients = lines
      .map((line) => {
        // 最初のスペースで2つに分割
        var [name, quantity] = line.split(/(?<=^[^\s]+)\s/);
        var info =
          quantity !== undefined
            ? quantity.replace(/\s+/g, "")
            : "適量";

        info = spoonToGram(name, info);

        return { name, info };
      })
      .filter((ingredient) => ingredient !== null);

    onChange(parsedIngredients, cartID);
  };

  const handleClear = () => {
    setInputText("");
    onClear(cartID);
  };

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
        <button onClick={() => onRemove(cartID)}>×</button>
      </div>
    </div>
  );
});

export default IngredientInput;
