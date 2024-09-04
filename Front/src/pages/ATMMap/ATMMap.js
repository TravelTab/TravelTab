import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";

const ATMMap = () => {
  return (
    <APIProvider
      apiKey={"AIzaSyCTo4A7LWokSnfceWD4c1pgJE9kVqzQRiw"}
      onLoad={() => console.log("Maps API has loaded.")}
    >
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onCameraChanged={(ev) =>
          console.log(
            "camera changed:",
            ev.detail.center,
            "zoom:",
            ev.detail.zoom
          )
        }
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></Map>
    </APIProvider>
  );
};

export default ATMMap;
