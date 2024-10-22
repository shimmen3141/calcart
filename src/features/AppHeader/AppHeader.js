import { useState } from "react";
import "./AppHeader.css";
import { ToggleSwitchArea } from "../index";
import Accordion from "../../components/Accordion/Accordion";
import SettingButton from "../../components/SettingButton/SettingButton";
import useAccordion from "../../components/Accordion/useAccordion";

const AppHeader = () => {
// アコーディオンの開閉を管理する変数
  const [isOpen, setIsOpen] = useState(false);

  // アコーディオンの開閉を切り替える関数
  const toggleAccordion = () => {
    setIsOpen((prevStates) => !prevStates);
  };
  //const { toggleAccordion } = useAccordion();
  return (
    <div className="appHeader">
      <div className="title">Calcart</div>
      <SettingButton onClick={toggleAccordion} />
      <Accordion isOpen={isOpen}>
        <ToggleSwitchArea />
      </Accordion>
    </div>
  );
};

export default AppHeader;
