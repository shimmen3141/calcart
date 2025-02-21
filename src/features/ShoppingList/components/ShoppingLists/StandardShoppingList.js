import BaseShoppingList from "./BaseShoppingList";
import { CopyButton } from "components";

const StandardShoppingList = ({ items }) => {
  const itemsText = items
    .map((item) => `${item.name}  ${item.info}`)
    .join("\n");

  return (
    <div className="shoppingListContainer">
      <div className="title">
        買い物リスト
        {itemsText && <CopyButton text={itemsText} />}
      </div>
      <BaseShoppingList items={items} className="standardList" />
    </div>
  );
};

export default StandardShoppingList;
