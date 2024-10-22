import "./SettingButton.css";

const SettingButton = ({ onClick }) => {
    return (
        <img src="gear.svg" alt="setting" className="settingButton" onClick={onClick} />
    );
};

export default SettingButton;