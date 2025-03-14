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
        <div className="desc">
          例：<div className="item">ニンジン</div>&nbsp;
          <div className="info">2本</div>
        </div>
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
          例：
          <div>
            <div className="item">ニンジン</div>
            <div className="info">2本</div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default InputModeRadioButton;
