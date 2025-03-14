import { useCartInput } from "features/Carts/hooks";
import InputFormatTag from "./InputFormatTag";
import InputModeRadioButton from "./InputModeRadioButton";
import "./CartInputArea.scss";

const CartInputArea = ({ cartId }) => {
  const {
    inputText,
    inputMode,
    handleInputChange,
    handleClear,
    handleModeChange,
    placeholder,
  } = useCartInput({
    cartId,
  });

  return (
    <div className="cartInputArea">
      <div className="triangleBorder"></div>
      <div className="triangle"></div>
      {/* <InputFormatTag inputText={inputText} /> */}
      <div className="text">入力モードを選択：</div>
      <div className="radioButtonWrapper">
        <InputModeRadioButton
          cartId={cartId}
          inputMode={inputMode}
          handleModeChange={handleModeChange}
        />
      </div>
      <div className="text">アイテムリストを入力：</div>
      <div className="textareaWrapper">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
      </div>
      <button className="clearButton" onClick={handleClear}>
        クリア
      </button>
    </div>
  );
};

export default CartInputArea;
