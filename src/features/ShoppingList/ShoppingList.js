const ShoppingList = ({ itemList, className, labelName }) => {
  return (
    <div>
      {itemList.length > 0 && (
        <ul className={className}>
          {labelName && <div className="listTypeTag">{labelName}</div>}
          {itemList.map((item, index) => (
            <div key={index}>
              <input type="checkbox" /> {item.name} {item.info}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingList;
