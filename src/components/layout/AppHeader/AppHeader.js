import "./AppHeader.scss";
import { SettingMenu } from "features";

const AppHeader = () => {
  console.log("AppHeader");

  return (
    <div className="appHeader">
      <div className="title">Calcart</div>
      <SettingMenu />
    </div>
  );
};

export default AppHeader;
