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
            <ul className="vegetableList">
              <div className="listTypeTag">野菜</div>
              {vegetableItemList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name}  {item.info}
                </div>
              ))}
            </ul>
          )}

          {/* 肉リスト */}
          {meatItemList.length > 0 && (
            <ul className="meatList">
              <div className="listTypeTag">肉</div>
              {meatItemList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name}  {item.info}
                </div>
              ))}
            </ul>
          )}

          {/* その他リスト */}
          {otherItemList.length > 0 && (
            <ul className="normalList">
              <div className="listTypeTag">その他</div>
              {otherItemList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name}  {item.info}
                </div>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <ul className="normalList">
          {shoppingList.map((item, index) => (
            <div key={index}>
              <input type="checkbox" /> {item.name}  {item.info}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingList;
