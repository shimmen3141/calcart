import { CopyButton } from "components";

const ShoppingListHeader = ({ title, itemsText }) => {
  return (
    <div className="title">
      {title}
      {itemsText && <CopyButton text={itemsText} />}
    </div>
  );
};

export default ShoppingListHeader;
