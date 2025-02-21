import BaseShoppingList from "./BaseShoppingList";
import { CATEGORIES } from "features/ShoppingList/constants";

const ClassifiedShoppingList = ({ classifiedItems }) => {
  return (
    <div>
      {Object.entries(CATEGORIES).map(([key, { label }]) => (
        <BaseShoppingList
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
