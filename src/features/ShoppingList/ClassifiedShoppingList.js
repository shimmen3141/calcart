import ShoppingList from "./ShoppingList";

const ClassifiedShoppingList = ({ classifiedItemList }) => {
  const getCategoryLabel = (categoryKey) => {
    const labels = {
      vegetable: "野菜",
      meat: "肉",
      others: "その他",
    };
    return labels[categoryKey] || "";
  };

  return (
    <div>
      {Object.entries(classifiedItemList).map(([categoryKey, items]) => (
        <ShoppingList
          key={categoryKey}
          itemList={items}
          className={`${categoryKey}List`}
          labelName={getCategoryLabel(categoryKey)}
        />
      ))}
    </div>
  );
};

export default ClassifiedShoppingList;
