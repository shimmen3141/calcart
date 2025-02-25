import { CopyButton } from "components";

const ShoppingListHeader = ({ title, copyText }) => {
  return (
    <div className="title">
      {title}
      {copyText && <CopyButton text={copyText} />}
    </div>
  );
};

export default ShoppingListHeader;
