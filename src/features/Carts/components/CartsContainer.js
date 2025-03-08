import CartsHeader from "./CartsHeader";
import AddCartButton from "./AddCartButton";
import Carts from "./Carts";
import "./CartsContainer.scss";

const CartsContainer = () => {
  console.log("CartsContainer");

  return (
    <div className="cartsContainer">
      <CartsHeader title="アイテム入力" />
      <AddCartButton />
      <Carts />
    </div>
  );
};

export default CartsContainer;
