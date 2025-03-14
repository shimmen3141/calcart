import "./InputModeRadioButton.scss";

const InputModeRadioButton = ({ cartId, inputMode, handleModeChange }) => {
  return (
    <div className="inputModeRadioButton">
      <label className="radioButtonContainer">
        <div className="radioButton">
          <div className="radioMark"></div>
          <input
            type="radio"
            name={`inputMode-${cartId}`}
            value="one-line"
            checked={inputMode === "one-line"}
            onChange={() => handleModeChange("one-line")}
          />
          1行ずつ入力
        </div>
        <div className="desc">例：しょうゆ 大さじ2</div>
      </label>
      <label className="radioButtonContainer">
        <div className="radioButton">
          <div className="radioMark"></div>
          <input
            type="radio"
            name={`inputMode-${cartId}`}
            value="two-line"
            checked={inputMode === "two-line"}
            onChange={() => handleModeChange("two-line")}
          />
          2行ずつ入力
        </div>
        <div className="desc">
          例：しょうゆ
          <br />
          大さじ2
        </div>
      </label>
    </div>
  );
};

export default InputModeRadioButton;
