import "./AppHeader.css";
import { ToggleSwitchArea } from "../index";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import SettingButton from "../../components/SettingButton/SettingButton";
import useDropdownMenu from "../../components/DropdownMenu/useDropdownMenu";

const AppHeader = () => {
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
