import "./SettingMenu.scss";
import { ToggleSwitchArea } from "features";
import { DropdownMenu, useDropdownMenu, SettingButton } from "components";

const SettingMenu = () => {
  const { isOpen, toggleDropdown } = useDropdownMenu();

  return (
    <div>
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
