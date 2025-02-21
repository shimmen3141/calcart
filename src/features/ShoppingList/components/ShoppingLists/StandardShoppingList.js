import BaseShoppingList from "./BaseShoppingList";

const StandardShoppingList = ({ items }) => {
  if (items.length === 0) return null;

  return (
    <div>
      <BaseShoppingList items={items} className="normalList" />
    </div>
  );
};

export default StandardShoppingList;
