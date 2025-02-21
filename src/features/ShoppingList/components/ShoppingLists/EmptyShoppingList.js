const EmptyShoppingList = () => {
  return (
    <div className="shoppingListContainer">
      <div className="title">買い物リスト</div>
      <div className="empty">
        <div>カートが空です</div>
        <div>カートに材料を入力してください</div>
      </div>
    </div>
  );
};

export default EmptyShoppingList;
