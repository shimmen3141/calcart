import "./AppHeader.css";
import { ToggleSwitchArea } from "../index";
import Accordion from "../../components/Accordion/Accordion";
import SettingButton from "../../components/SettingButton/SettingButton";
import useAccordion from "../../components/Accordion/useAccordion";

const AppHeader = () => {
  
  const { isOpen, toggleAccordion } = useAccordion();

  return (
    <div className="appHeader">
      <div className="title">Calcart</div>
      <div className="settingButton">
        <SettingButton onClick={toggleAccordion} />
      </div>
      <Accordion isOpen={isOpen}>
        <ToggleSwitchArea />
      </Accordion>
    </div>
  );
};

export default AppHeader;
