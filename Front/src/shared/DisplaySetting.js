const DisplaySetting = (props) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: "white",
        zIndex: 10,
      }}
    >
      {props.children}
    </div>
  );
};

export default DisplaySetting;
