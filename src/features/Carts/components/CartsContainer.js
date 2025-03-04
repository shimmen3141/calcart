import { CartsHeader, AddCartButton, Carts } from "features";
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
