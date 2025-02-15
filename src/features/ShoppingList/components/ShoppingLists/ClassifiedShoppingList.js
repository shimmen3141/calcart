import ShoppingList from "./ShoppingList";
import { CATEGORIES } from "features/ShoppingList/constants";

const ClassifiedShoppingList = ({ classifiedItemList }) => {
  return (
    <div>
      {Object.entries(CATEGORIES).map(([key, { label }]) => (
        <ShoppingList
          key={key}
          itemList={classifiedItemList[key]}
          className={`${key}List`}
          labelName={label}
        />
      ))}
    </div>
  );
};

export default ClassifiedShoppingList;
