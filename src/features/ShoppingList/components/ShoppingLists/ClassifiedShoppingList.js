import ShoppingList from "./ShoppingList";
import { CATEGORIES } from "features/ShoppingList/constants";

const ClassifiedShoppingList = ({ classifiedItems }) => {
  return (
    <div>
      {Object.entries(CATEGORIES).map(([key, { label }]) => (
        <ShoppingList
          key={key}
          items={classifiedItems[key]}
          className={`${key}List`}
          labelName={label}
        />
      ))}
    </div>
  );
};

export default ClassifiedShoppingList;
