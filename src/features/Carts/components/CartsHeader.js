import { PenIcon } from "components";
import "./CartsHeader.scss";

const CartsHeader = ({ title }) => {
  return (
    <div className="cartsHeader">
      <div className="title">
        <PenIcon />
        {title}
      </div>
    </div>
  );
};

export default CartsHeader;
