import {
  ToggleSwitch,
  HelpButton,
  RemoveSymbolsModal,
  SpoonToGramModal,
  useModal,
  useToggleSwitch,
} from "../index";

const ToggleSwitchArea = () => {
  console.log("ToggleSwitchArea");

  const { toggleStates, handleToggleSwitchChange } = useToggleSwitch();

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
          onChange={handleToggleSwitchChange}
        />
      </div>
      <div>
        大さじ・小さじ → g に変換
        <HelpButton onClick={() => handleOpenModal("spoonToGram")} />
        <SpoonToGramModal isOpen={isModalOpen} onClose={handleCloseModal} />
        <ToggleSwitch
          id="spoonToGram"
          isChecked={toggleStates.spoonToGram}
          onChange={handleToggleSwitchChange}
        />
      </div>
    </div>
  );
};

export default ToggleSwitchArea;
