import { ShoppingListArea, Carts, Modal } from "../index";
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
