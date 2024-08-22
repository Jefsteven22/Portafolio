import "./style/MenuHamb.css";

const MenuHamb = ({ setIsOn, isOn }) => {
  const handleOpen = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="MenuHamb">
      <input type="checkbox" id="checkbox" />
      <label
        htmlFor="checkbox"
        className={`toggle ${isOn ? "active" : ""}`}
        onClick={handleOpen}
      >
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
      </label>
    </div>
  );
};

export default MenuHamb;
