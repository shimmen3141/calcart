import React from "react";
import useCart from "./useCart";
import {
  InputFormatTag,
  CloseButton,
  useModal,
  InputFormatModal,
} from "../index";
import "./Cart.css";
import CartCountSpinButton from "../CartCountSpinButton/CartCountSpinButton";

const Cart = React.memo(
  ({
    allCarts,
    setAllCarts,
    cartID,
    cartNumber,
    cartRefs,
  }) => {
    const {
      inputText,
      inputFormat,
      handleInputChange,
      handleClear,
      handleRemove,
      isLastCart,
      hadleCartCountChange,
      hadleCartCountChange2,
    } = useCart({
      allCarts,
      setAllCarts,
      cartID,
      cartNumber,
      cartRefs,
    });

    const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

    console.log(`Cart${cartNumber}`);

    return (
      <div className="cart">
        <h2>カート{cartNumber + 1} </h2>
        <CloseButton onClick={handleRemove} disabled={isLastCart()} />
        <InputFormatTag
          inputFormat={inputFormat}
          onClick={() => handleOpenModal("inputFormat")}
        />
        <InputFormatModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <div>材料リストを入力：</div>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder={`例:\nにんじん 2本\nタマネギ 3個\n醤油 50ml`}
          rows="30"
          cols="50"
        />
        <div>
          <button onClick={handleClear}>クリア</button>
        </div>
        <div>カート台数：</div>
        {/* <input
          type="number"
          // step="0.01"
          min="0"
          defaultValue="1"
          onChange={hadleCartCountChange}
        /> */}
        <CartCountSpinButton hadleCartCountChange2={hadleCartCountChange2} />
      </div>
    );
  }
);

export default Cart;
