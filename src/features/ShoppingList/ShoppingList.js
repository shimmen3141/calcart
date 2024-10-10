import React from "react";
import aggregateItems from "./aggregateItems";
import classifyItems from "./classifyItems";
import { CopyButton, useToggleSwitch } from "../index";
import "./ShoppingList.css";

const ShoppingList = ({ items }) => {
  console.log("ShoppingList");

  const { toggleStates } = useToggleSwitch();
  const { itemList, itemListText } = aggregateItems({ items });
  const { classifiedItemList, classifiedItemListText } = classifyItems({
    itemList,
  });

  const copyText = toggleStates.classifyItems
    ? classifiedItemListText
    : itemListText;

  return (
    <div className="shoppingList">
      <div className="title">
        買い物リスト <CopyButton text={copyText} />
      </div>
      {toggleStates.classifyItems ? (
        <div>
          {/* 野菜リスト */}
          {classifiedItemList.vegetable.length > 0 && (
            <ul className="vegetableList">
              <div className="listTypeTag">野菜</div>
              {classifiedItemList.vegetable.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name} {item.info}
                </div>
              ))}
            </ul>
          )}

          {/* 肉リスト */}
          {classifiedItemList.meat.length > 0 && (
            <ul className="meatList">
              <div className="listTypeTag">肉</div>
              {classifiedItemList.meat.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name} {item.info}
                </div>
              ))}
            </ul>
          )}

          {/* その他リスト */}
          {classifiedItemList.others.length > 0 && (
            <ul className="normalList">
              <div className="listTypeTag">その他</div>
              {classifiedItemList.others.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name} {item.info}
                </div>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <div>
          {itemList.length > 0 && (
            <ul className="normalList">
              {itemList.map((item, index) => (
                <div key={index}>
                  <input type="checkbox" /> {item.name} {item.info}
                </div>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ShoppingList;
