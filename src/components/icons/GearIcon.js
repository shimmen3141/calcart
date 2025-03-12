import "./GearIcon.scss";

const GearIcon = () => {
  return (
    <div className="gearIcon">
      {[...Array(4)].map((_, index) => (
        <div className="gearTooth" key={index}></div>
      ))}
      <div className="gearBody"></div>
    </div>
  );
};

export default GearIcon;
