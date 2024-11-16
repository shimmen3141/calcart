import "./AppHeader.scss";
import {
  ToggleSwitchArea,
  DropdownMenu,
  useDropdownMenu,
  SettingButton,
} from "../index";

const AppHeader = () => {
  console.log("AppHeader");

  const { isOpen, toggleDropdown } = useDropdownMenu();

  return (
    <div className="appHeader">
      <div className="title">Calcart</div>
      <div className={`settingButton ${isOpen ? "open" : ""}`}>
        <SettingButton onClick={toggleDropdown} />
      </div>
      <DropdownMenu isOpen={isOpen}>
        <ToggleSwitchArea />
      </DropdownMenu>
      {isOpen && <div className="outsideMenu" onClick={toggleDropdown}></div>}
    </div>
  );
};

export default AppHeader;
