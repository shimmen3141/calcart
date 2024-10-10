const ShoppingList = ({ itemList }) => {
  return (
    <div>
      {itemList.length > 0 && (
        <ul className="normalList">
          {itemList.map((item, index) => (
            <div key={index}>
              <input type="checkbox" /> {item.name}  {item.info}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingList;
