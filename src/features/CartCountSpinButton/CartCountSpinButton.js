import useCartCountSpinButton from "./useCartCountSpinButton";
import { motion } from "framer-motion";
import "./CartCountSpinButton.css";

const CartCountSpinButton = ({ cartCount, hadleCartCountChange }) => {
  const {
    handleCountUp,
    handleCountDown,
    handleCountChange,
    handleBlur,
    handleKeyDown,
    setIsComposing,
    isMinCount,
    isMaxCount,
    value,
    errorMessage,
  } = useCartCountSpinButton({ cartCount, hadleCartCountChange });

  return (
    <div className="spinButton">
      <button onClick={handleCountDown} disabled={isMinCount()}>
        -
      </button>
      <input
        type="text"
        inputmode="numeric"
        value={value}
        onChange={handleCountChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <button onClick={handleCountUp} disabled={isMaxCount()}>
        +
      </button>
      {errorMessage && (
        <motion.div
          className="errorMessage"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          {errorMessage}
        </motion.div>
      )}
    </div>
  );
};

export default CartCountSpinButton;
