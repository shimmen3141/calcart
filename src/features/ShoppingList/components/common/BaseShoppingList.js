import "./BaseShoppingList.scss";

const BaseShoppingList = ({ items, className, labelName }) => {
  if (items.length === 0) return null;

  return (
    <div className="baseShoppingList">
      <div className={className}>
        {labelName && <div className="listTypeTag">{labelName}</div>}
        {items.map((item, index) => (
          <div key={index}>
            <input type="checkbox" /> {item.name} {item.info}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BaseShoppingList;
