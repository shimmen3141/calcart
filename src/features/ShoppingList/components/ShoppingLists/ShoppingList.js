const ShoppingList = ({ itemList, className, labelName }) => {
  if (itemList.length === 0) return null;

  return (
    <div>
      <ul className={className}>
        {labelName && <div className="listTypeTag">{labelName}</div>}
        {itemList.map((item, index) => (
          <div key={index}>
            <input type="checkbox" /> {item.name} {item.info}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
