const InputModeRadioButton = ({ cartId, inputMode, handleModeChange }) => {

  return (
    <div>
      <label>
        <input
          type="radio"
          name={`inputMode-${cartId}`}
          value="one-line"
          checked={inputMode === "one-line"}
          onChange={() => handleModeChange("one-line")}
        />
        1行ずつ入力
      </label>
      <label>
        <input
          type="radio"
          name={`inputMode-${cartId}`}
          value="two-line"
          checked={inputMode === "two-line"}
          onChange={() => handleModeChange("two-line")}
        />
        2行ずつ入力
      </label>
    </div>
  );
};

export default InputModeRadioButton;
