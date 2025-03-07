import "./SettingMenu.scss";
import { ToggleSwitchArea } from "features";
import { SettingButton } from "components";
import { DropdownMenu, useDropdownMenu } from "modules/DropdownMenu";

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
