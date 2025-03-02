import { CopyButton } from "components";
import "./ShoppingListHeader.scss";

const ShoppingListHeader = ({ title, copyText }) => {
  return (
    <div className="shoppingListHeader">
      {title}
      {copyText && <CopyButton copyText={copyText} />}
    </div>
  );
};

export default ShoppingListHeader;
