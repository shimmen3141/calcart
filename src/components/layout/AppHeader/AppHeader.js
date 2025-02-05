import "./AppHeader.scss";
import { ToggleSwitchArea } from "features";
import { DropdownMenu, useDropdownMenu, SettingButton } from "components";

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
