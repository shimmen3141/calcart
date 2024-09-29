import {
  ToggleSwitch,
  HelpButton,
  RemoveSymbolsModal,
  SpoonToGramModal,
  useModal,
  useToggleSwitch,
} from "../index";
import LabeledToggleSwitch from "../LabeledToggleSwitch/LabeledToggleSwitch";

const ToggleSwitchArea = () => {
  console.log("ToggleSwitchArea");

  const { toggleStates, handleSwitchChange } = useToggleSwitch();

  const { handleOpenModal, handleCloseModal, isModalOpen } = useModal();

  return (
    <div>
      {/* <LabeledToggleSwitch id="removeSymbols" labelText="記号を消去" />
      <LabeledToggleSwitch
        id="spoonToGram"
        labelText="大さじ・小さじ → g に変換"
      /> */}
      <div>
        記号を消去
        <HelpButton onClick={() => handleOpenModal("removeSymbols")} />
        <RemoveSymbolsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <ToggleSwitch
          id="removeSymbols"
          isChecked={toggleStates.removeSymbols}
          onChange={handleSwitchChange}
        />
      </div>
      <div>
        大さじ・小さじ → g に変換
        <HelpButton onClick={() => handleOpenModal("spoonToGram")} />
        <SpoonToGramModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <ToggleSwitch
          id="spoonToGram"
          isChecked={toggleStates.spoonToGram}
          onChange={handleSwitchChange}
        />
      </div>
    </div>
  );
};

export default ToggleSwitchArea;
