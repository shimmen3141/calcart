import { ShoppingListContainer, Carts } from "features";
import { Modal } from "components";
import "./MainContents.scss";

const MainContents = () => {
  console.log("MainContents");

  return (
    <div className="mainContents">
      <Carts />
      <ShoppingListContainer />
      <Modal />
    </div>
  );
};

export default MainContents;
