import BaseShoppingList from "./BaseShoppingList";

const ShoppingList = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <div>
      <BaseShoppingList items={items} className="normalList" />
    </div>
  );
};

export default ShoppingList;
