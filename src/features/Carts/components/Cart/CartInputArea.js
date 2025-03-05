import useCartInput from "features/Carts/hooks/useCartInput";
import { InputFormatTag } from "features";

const CartInputArea = ({ cartId }) => {
  const { inputText, handleInputChange, handleClear } = useCartInput({
    cartId,
  });

  return (
    <div className="cart">
      <div className="triangleBorder"></div>
      <div className="triangle"></div>
      <InputFormatTag inputText={inputText} />
      <div>材料リストを入力：</div>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder={`---例1 (1行1材料)---\nにんじん 2本\nタマネギ 3個\n醤油 50ml\n\n---例2 (2行1材料)---\nにんじん\n2本\nタマネギ\n3個\n醤油\n50ml`}
      />
      <div>
        <button className="clearButton" onClick={handleClear}>
          クリア
        </button>
      </div>
    </div>
  );
};

export default CartInputArea;
