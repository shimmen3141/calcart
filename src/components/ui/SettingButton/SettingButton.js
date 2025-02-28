import GearIcon from "./GearIcon";

const SettingButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <GearIcon />
    </div>
  );
};

export default SettingButton;
