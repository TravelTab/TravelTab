const Country = (props) => {
  return (
    <div
      style={{
        position: "relative", // Make the container relative for absolute positioning of children
        display: "flex",
        justifyContent: "center", // Center content horizontally (optional)
        alignItems: "center", // Center content vertically (optional)
        margin: "50px auto",
        width: "310px", // Set width to match the image width
        height: "128px", // Set height to match the image height
      }}
    >
      <img
        width="310"
        height="128"
        src={props.img_url}
        alt="Background"
        style={{
          position: "absolute", // Position image absolutely to cover the container
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensure image covers the container without distortion
          zIndex: 0, // Make sure image is behind text
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "10px", // Adjust as needed
          left: "10px", // Adjust as needed
          fontSize: "20px",
          fontFamily: "Inter",
          fontWeight: "600",
          color: "#000",
          zIndex: 1, // Make sure text is above the image
        }}
      >
        {props.country_name}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10px", // Adjust as needed
          right: "10px", // Adjust as needed
          fontSize: "24px",
          fontFamily: "Inter",
          fontWeight: "600",
          color: "#fff",
          zIndex: 1, // Make sure text is above the image
        }}
      >
        {props.exchange_rate}
      </div>
    </div>
  );
};

export default Country;
