import React from "react";
import aggregateItems from "./aggregateItems";
import { CopyButton } from "../index";

const ShoppingList = ({ items }) => {
  console.log("ShoppingList");

  const { shoppingList, shoppingListText } = aggregateItems({ items });

  return (
    <div>
      <h2>
        買い出しリスト <CopyButton text={shoppingListText} />
      </h2>
      {/* <div>{shoppingListText}</div> */}
      <ul>
        {shoppingList.map((item, index) => (
          <li key={index}>
            {item.name} {item.info}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
