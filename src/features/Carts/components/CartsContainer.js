import { CartsHeader, AddCartButton, Carts } from "features";

const CartsContainer = () => {
  console.log("CartsContainer");

  return (
    <div>
      <CartsHeader title="カート" />
      <AddCartButton />
      <Carts />
    </div>
  );
};

export default CartsContainer;
