import "./AppHeader.scss";
import { SettingMenu } from "features";

const AppHeader = () => {
  console.log("AppHeader");

  return (
    <div className="appHeader">
      <img
        src={`${process.env.PUBLIC_URL}/cart_icon_transparent.png`}
        alt="App Header Icon"
        className="appHeaderIcon"
      />
      <div className="title">Calcart</div>
      <SettingMenu />
    </div>
  );
};

export default AppHeader;
