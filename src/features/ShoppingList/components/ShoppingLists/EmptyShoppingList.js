import ShoppingListHeader from "../common/ShoppingListHeader";

const EmptyShoppingList = () => {
  return (
    <div className="shoppingListContainer">
      <ShoppingListHeader title="買い物リスト" />
      <div className="empty">
        <div>カートが空です</div>
        <div>カートに材料を入力してください</div>
      </div>
    </div>
  );
};

export default EmptyShoppingList;
