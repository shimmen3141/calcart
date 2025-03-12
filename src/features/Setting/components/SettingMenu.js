import ToggleSwitchArea from "./ToggleSwitchArea";
import { SettingButton } from "components";
import { DropdownMenu, useDropdownMenu } from "modules";
import "./SettingMenu.scss";

const SettingMenu = () => {
  const { isOpen, toggleDropdown } = useDropdownMenu();

  return (
    <div className="settingMenu">
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

export default SettingMenu;
