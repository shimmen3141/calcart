import BaseShoppingList from "./BaseShoppingList";
import { CATEGORIES } from "features/ShoppingList/constants";
import { CopyButton } from "components";
import classifyItems from "features/ShoppingList/utils/textProcessing/classifyItems";

const ClassifiedShoppingList = ({ items }) => {
  const classifiedItems = classifyItems(items);
  const classifiedItemsText = Object.entries(classifiedItems)
    .map(([category, items]) =>
      items.length > 0
        ? items.map((item) => `${item.name}  ${item.info}`).join("\n")
        : ""
    )
    .filter(Boolean) // 空のセクションを削除
    .join("\n\n"); // 1行間をあけて各セクションを結合

  return (
    <div className="shoppingListContainer">
      <div className="title">
        買い物リスト
        {classifiedItemsText && <CopyButton text={classifiedItemsText} />}
      </div>
      {Object.entries(CATEGORIES).map(([key, { label }]) => (
        <BaseShoppingList
          key={key}
          items={classifiedItems[key]}
          className={`${key}List`}
          labelName={label}
        />
      ))}
    </div>
  );
};

export default ClassifiedShoppingList;
