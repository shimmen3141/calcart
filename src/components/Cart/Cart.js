import React from "react";
import useCart from "./useCart";
import {
  InputFormatTag,
  CloseButton,
  useModal,
  InputFormatModal,
  HelpButton,
} from "../index";

const Cart = React.memo(
  ({
    allCarts,
    setAllCarts,
    cartID,
    cartNumber,
    cartRefs,
    isRemoveSymbolsApplied,
    isSpoonToGramApplied,
  }) => {
    const {
      inputText,
      inputFormat,
      handleInputChange,
      handleClear,
      handleRemove,
      isLastCart,
      hadleCartCountChange,
    } = useCart({
      allCarts,
      setAllCarts,
      cartID,
      cartNumber,
      cartRefs,
      isRemoveSymbolsApplied,
      isSpoonToGramApplied,
    });

    const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

    console.log(`Cart${cartNumber}`);

    return (
      <div style={{ position: "relative" }}>
        <h2>カート{cartNumber + 1} </h2>
        <CloseButton onClick={handleRemove} disabled={isLastCart()} />
        <InputFormatTag
          inputFormat={inputFormat}
          onClick={() => handleOpenModal("inputFormat")}
        />
        {/* <HelpButton onClick={() => handleOpenModal("inputFormat")} /> */}
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
        <input
          type="number"
          min="0"
          defaultValue="1"
          onChange={hadleCartCountChange}
        />
      </div>
    );
  }
);

export default Cart;
