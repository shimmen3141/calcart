import { ShoppingListArea, Carts, Modal, useCart } from "../index";
import "./MainContents.scss";

const MainContents = () => {
  console.log("MainContents");

  const { carts, setCarts } = useCart();

  return (
    <div className="mainContents">
      <Carts carts={carts} setCarts={setCarts} />
      <ShoppingListArea />
      <Modal />
    </div>
  );
};

export default MainContents;
