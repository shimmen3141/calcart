import { CopyButton } from "components";
import "./ShoppingListHeader.scss";

const ShoppingListHeader = ({ title, copyText }) => {
  return (
    <div className="shoppingListHeader">
      <div className="title">{title}</div>
      {copyText && <CopyButton copyText={copyText} />}
    </div>
  );
};

export default ShoppingListHeader;
