import React from "react";
import aggregateItems from "./aggregateItems";
import classifyItems from "./classifyItems";
import { CopyButton, useToggleSwitch } from "../index";
import "./ShoppingList.css";

const ShoppingList = ({ items }) => {
  console.log("ShoppingList");

  const { toggleStates } = useToggleSwitch();
  const { shoppingList, shoppingListText } = aggregateItems({ items });
  const { vegetableItemList, meatItemList, otherItemList } = classifyItems({
    shoppingList,
  });

  return (
    <div className="shoppingList">
      <div className="title">
        買い物リスト <CopyButton text={shoppingListText} />
      </div>
      {/* <div>{shoppingListText}</div> */}
      {toggleStates.classifyItems ? (
        <div>
          {/* 野菜リスト */}
          {vegetableItemList.length > 0 && (
            <ul className="list">
              <h3>野菜</h3>
              {vegetableItemList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name} {item.info}
                </div>
              ))}
            </ul>
          )}

          {/* 肉リスト */}
          {meatItemList.length > 0 && (
            <ul className="list">
              <h3>肉</h3>
              {meatItemList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name} {item.info}
                </div>
              ))}
            </ul>
          )}

          {/* その他リスト */}
          {otherItemList.length > 0 && (
            <ul className="list">
              <h3>その他</h3>
              {otherItemList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name} {item.info}
                </div>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <ul className="list">
          {shoppingList.map((item, index) => (
            <div key={index}>
              <input type="checkbox" /> {item.name} {item.info}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingList;
