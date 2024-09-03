import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

const ATMMap=()=>{
    return(
        <APIProvider apiKey={'AIzaSyCTo4A7LWokSnfceWD4c1pgJE9kVqzQRiw'} onLoad={() => console.log('Maps API has loaded.')}>
        <Map
           defaultZoom={13}
           defaultCenter={ { lat: 37.60664, lng: 127.208138 } }
           onCameraChanged={ (ev)=>console.log("map is moved!",console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom))}
           style={{ width: '100%', height: '500px' }}  // 스타일 추가
           >
        </Map>
      </APIProvider>
    )
}

export default ATMMap;