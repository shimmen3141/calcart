import GearIcon from "components/icons/GearIcon";

const SettingButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <GearIcon />
    </div>
  );
};

export default SettingButton;
