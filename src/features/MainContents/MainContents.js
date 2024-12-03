import { ShoppingListArea, Carts } from "../index";
import { Modal } from "components";
import "./MainContents.scss";

const MainContents = () => {
  console.log("MainContents");

  return (
    <div className="mainContents">
      <Carts />
      <ShoppingListArea />
      <Modal />
    </div>
  );
};

export default MainContents;
