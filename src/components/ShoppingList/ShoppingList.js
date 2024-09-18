import React from "react";
import aggregateItems from "./aggregateItems";
import { CopyButton } from "../index";

const ShoppingList = ({ items }) => {
  console.log("ShoppingList");

  const { shoppingList, shoppingListText } = aggregateItems({ items });

  return (
    <div>
      <h2>
        買い物リスト <CopyButton text={shoppingListText} />
      </h2>
      {/* <div>{shoppingListText}</div> */}
      <ul>
        {shoppingList.map((item, index) => (
          <div key={index}>
            <input type="checkbox"/> {item.name} {item.info}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
