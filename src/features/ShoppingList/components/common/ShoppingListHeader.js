import { CopyButton } from "components";
import "./ShoppingListHeader.scss";

const ShoppingListHeader = ({ title, copyText }) => {
  return (
    <div className="shoppingListHeader">
      <div className="title">{title}</div>
      <div className="actionButtons">
        {copyText && <CopyButton copyText={copyText} />}
      </div>
    </div>
  );
};

export default ShoppingListHeader;
