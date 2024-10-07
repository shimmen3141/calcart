import React from "react";
import aggregateItems from "./aggregateItems";
import { CopyButton } from "../index";
import "./ShoppingList.css";

const ShoppingList = ({ items }) => {
  console.log("ShoppingList");

  const { shoppingList, shoppingListText } = aggregateItems({ items });

  return (
    <div className="shoppingList">
      <div className="title">
        買い物リスト <CopyButton text={shoppingListText} />
      </div>
      {/* <div>{shoppingListText}</div> */}
      <ul className="list">
        {shoppingList.map((item, index) => (
          <div key={index}>
            <input type="checkbox"/> {item.name}  {item.info}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
