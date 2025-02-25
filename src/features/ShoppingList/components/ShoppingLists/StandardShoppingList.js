import BaseShoppingList from "features/ShoppingList/components/common/BaseShoppingList";
import ShoppingListHeader from "features/ShoppingList/components/common/ShoppingListHeader";

const StandardShoppingList = ({ items }) => {
  const itemsText = items
    .map((item) => `${item.name}  ${item.info}`)
    .join("\n");

  return (
    <div className="shoppingListContainer">
      <ShoppingListHeader title="買い物リスト" copyText={itemsText} />
      <BaseShoppingList items={items} className="standardList" />
    </div>
  );
};

export default StandardShoppingList;
