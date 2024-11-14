import {
  ToggleSwitch,
  HelpButton,
  RemoveSymbolsModal,
  SpoonToGramModal,
  useModal,
  useToggleSwitch,
} from "../index";
import LabeledToggleSwitch from "../LabeledToggleSwitch/LabeledToggleSwitch";
import "./ToggleSwitchArea.scss";

const ToggleSwitchArea = () => {
  console.log("ToggleSwitchArea");

  const { toggleStates, handleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  return (
    <div className="toggleSwitchArea">
      {/* <LabeledToggleSwitch id="removeSymbols" labelText="記号を消去" />
      <LabeledToggleSwitch
        id="spoonToGram"
        labelText="大さじ・小さじ → g に変換"
      /> */}
      <div className="triangle"></div>
      <div className="labeledToggleSwitches">
        <div className="labeledToggleSwitch">
          <div className="labelText">記号を消去</div>
          <HelpButton onClick={() => handleOpenModal("removeSymbols")} />
          <RemoveSymbolsModal isOpen={isModalOpen} onClose={handleCloseModal} />
          <ToggleSwitch
            id="removeSymbols"
            isChecked={toggleStates.removeSymbols}
            onChange={handleSwitchChange}
          />
        </div>
        <div className="labeledToggleSwitch">
          <div className="labelText">大さじ・小さじをグラムに変換</div>
          <HelpButton onClick={() => handleOpenModal("spoonToGram")} />
          <SpoonToGramModal isOpen={isModalOpen} onClose={handleCloseModal} />
          <ToggleSwitch
            id="spoonToGram"
            isChecked={toggleStates.spoonToGram}
            onChange={handleSwitchChange}
          />
        </div>
        <div className="labeledToggleSwitch">
          <div className="labelText">リストを分割</div>
          <HelpButton onClick={() => handleOpenModal("spoonToGram")} />
          <ToggleSwitch
            id="classifyItems"
            isChecked={toggleStates.classifyItems}
            onChange={handleSwitchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitchArea;
