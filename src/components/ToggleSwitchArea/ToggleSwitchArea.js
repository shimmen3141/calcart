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
      <div>
        <ToggleSwitch
          id="removeSymbols"
          title={"記号を消去"}
          isChecked={toggleStates.removeSymbols}
          onChange={handleToggleSwitchChange}
        />
        <HelpButton onClick={() => handleOpenModal("removeSymbols")} />
        <RemoveSymbolsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
      <div>
        <ToggleSwitch
          id="spoonToGram"
          title={"大さじ・小さじ → g に変換"}
          isChecked={toggleStates.spoonToGram}
          onChange={handleToggleSwitchChange}
        />
        <HelpButton onClick={() => handleOpenModal("spoonToGram")} />
        <SpoonToGramModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default ToggleSwitchArea;
