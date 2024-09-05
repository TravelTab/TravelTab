import React, { useEffect, useRef, useState } from "react";
import Header from "../../shared/components/Header";
import Sidebar from "../../shared/components/Sidebar";

const ATMMap = () => {
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [userPosition, setUserPosition] = useState({
    lat: 35.6814104676112, // 기본 위치 (도쿄)
    lng: 139.76708188085172,
  });
  const [userLocationCountry, setUserLocationCountry] = useState(null);
  const [atmKeywords, setAtmKeywords] = useState([]);
  const [freeAtmKeywords, setFreeAtmKeywords] = useState([]);
  const [isFreeFeeEnabled, setIsFreeFeeEnabled] = useState(false);
  const [apiLoaded, setApiLoaded] = useState(false); // API 로드 상태
  const userId = "66d78fa552e9e51e1735281d"; // 하드코딩된 사용자 ID
  const mapRef = useRef(null);

  // Google Maps API 비동기 로드
  useEffect(() => {
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjKFlhABKfrk10UVUrvmbBvKtOSPDH4_k&libraries=places,geocoding,marker`; // 여기에 본인의 API Key 사용
        script.async = true;
        script.defer = true;

        script.onload = () => {
          if (window.google && window.google.maps) {
            setApiLoaded(true); // API 로드 상태 업데이트
            getUserLocation(); // Google Maps API 로드 후 사용자 위치 가져오기
          } else {
            console.error("Google Maps API 로드 실패");
          }
        };

        script.onerror = () => {
          console.error("Google Maps API 스크립트 로드 오류");
        };

        document.head.appendChild(script);
      } else {
        setApiLoaded(true); // 이미 Google Maps API가 로드된 경우
        getUserLocation();
      }
    };

    loadGoogleMapsScript(); // Google Maps API 로드 호출
  }, []);

  // 사용자 위치 가져오기
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            // lat: position.coords.latitude,
            // lng: position.coords.longitude,
            // 시험용 하드코딩
            lat: 35.6814104676112, // 기본 위치 (도쿄)
            lng: 139.76708188085172,
          };
          setUserPosition(userPos);
          initializeMap(userPos); // 사용자 위치로 지도 초기화
        },
        (error) => {
          console.error("Error getting user location:", error);
          const defaultPos = {
            lat: 35.6814104676112, // 기본 위치 (도쿄)
            lng: 139.76708188085172,
          };
          setUserPosition(defaultPos);
          initializeMap(defaultPos); // 기본 위치로 지도 초기화
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert("이 브라우저는 위치 정보를 지원하지 않습니다.");
    }
  };

  // 지도 초기화 함수
  const initializeMap = (position) => {
    if (mapRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: position,
        zoom: 15,
      });
      setMap(mapInstance); // 비동기적으로 map 상태 업데이트
    }
  };

  // userPosition이 업데이트되면 국가 정보 가져오기
  useEffect(() => {
    if (userPosition && apiLoaded) {
      getCountryInfo(userPosition); // Google Maps API가 로드된 후 사용자 위치 기반 국가 정보 가져오기
    }
  }, [userPosition, apiLoaded]); // userPosition과 apiLoaded가 변경될 때마다 실행

  // map과 userPosition이 설정된 후 마커 추가
  useEffect(() => {
    if (map && userPosition) {
      addMarker(userPosition, "You are here!"); // map이 설정된 후에 마커 추가
    }
  }, [map, userPosition]); // map과 userPosition이 설정될 때마다 실행

  // 마커 추가 함수
  const addMarker = (position, title) => {
    if (map && position) {
      // map과 position이 유효한지 확인
      const marker = new window.google.maps.Marker({
        position: position,
        map: map,
        title: title,
      });
      setMarkers((prevMarkers) => [...prevMarkers, marker]);
      console.log(`Marker added at ${position.lat}, ${position.lng}`);
    } else {
      console.error("Map or position is not defined.");
    }
  };

  // 사용자 위치 기반 국가 정보 가져오기
  const getCountryInfo = (coords) => {
    if (window.google && window.google.maps) {
      const geocoder = new window.google.maps.Geocoder();
      const latLng = {
        lat: coords.lat,
        lng: coords.lng,
      };

      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK" && results[0]) {
          const countryComponent = results[0].address_components.find(
            (component) => component.types.includes("country")
          );
          if (countryComponent) {
            setUserLocationCountry(countryComponent.long_name);
          } else {
            console.error("Country information not found.");
          }
        } else {
          console.error("Geocode failed:", status);
        }
      });
    }
  };

  // userLocationCountry가 업데이트된 후에 API 호출
  useEffect(() => {
    if (userLocationCountry) {
      fetchATMDataFromDB(userLocationCountry); // 국가 정보에 따라 ATM 데이터 가져오기
    }
  }, [userLocationCountry]); // userLocationCountry가 변경될 때마다 실행

  // MongoDB에서 사용자 위치와 일치하는 ATM 데이터를 가져옴 (API 호출)
  const fetchATMDataFromDB = async (country) => {
    try {
      const encodedCountry = encodeURIComponent(country); // 한글 국가명 인코딩
      const response = await fetch(
        `http://localhost:5500/getAtms/${encodedCountry}`
      );
      const data = await response.json(); // fetch의 응답을 JSON으로 변환
      console.log(data);
      console.log("받아온 데이터");
      if (data && data.length > 0) {
        setAtmKeywords(data); // ATM 키워드 업데이트
      } else {
        alert("해당 국가의 ATM 데이터를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching ATM data:", error);
    }
  };

  // MongoDB에서 사용자 위치와 일치하고 사용자의 카드 기반으로 수수료가 무료인 ATM 데이터를 가져옴 (API 호출)
  const fetchFreeATMDataFromDB = async () => {
    try {
      if (!userLocationCountry || !userId) return;

      const response = await fetch(
        `http://localhost:5500/getAtmByUser/${userId}/${userLocationCountry}`
      );
      const data = await response.json(); // fetch의 응답을 JSON으로 변환
      if (data && data.length > 0) {
        setFreeAtmKeywords(data);
        console.log("Free ATM keywords: ", data); // 데이터 로그 확인
      } else {
        alert("사용자 카드로 사용할 수 있는 수수료 무료 ATM기가 없습니다.");
      }
    } catch (error) {
      console.error("Error fetching free ATM data:", error);
    }
  };

  // ATM 목록을 지도에 표시
  const showATMs = () => {
    const keywords = isFreeFeeEnabled ? freeAtmKeywords : atmKeywords;
    if (!map || !keywords.length) return;

    clearMarkers();

    const service = new window.google.maps.places.PlacesService(map);
    keywords.forEach((keyword) => {
      const request = {
        location: userPosition,
        radius: "1000",
        keyword: keyword,
      };

      service.nearbySearch(request, (results, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          results.length
        ) {
          results.forEach((result) => {
            createMarker(result);
          });
        }
      });
    });
  };

  // 뷰포트 내 ATM 검색
  const searchInViewPort = () => {
    const keywords = isFreeFeeEnabled ? freeAtmKeywords : atmKeywords;
    if (!map || !keywords.length) return;

    clearMarkers();
    const bounds = map.getBounds();
    const service = new window.google.maps.places.PlacesService(map);

    keywords.forEach((keyword) => {
      const request = {
        bounds: bounds,
        keyword: keyword,
      };

      service.nearbySearch(request, (results, status) => {
        if (
          status === window.google.maps.places.PlacesServiceStatus.OK &&
          results.length
        ) {
          results.forEach((result) => {
            createMarker(result);
          });
        }
      });
    });
  };

  // 마커 생성 함수
  const createMarker = (place) => {
    const marker = new window.google.maps.Marker({
      position: place.geometry.location,
      map: map,
    });

    const infoWindow = new window.google.maps.InfoWindow();
    marker.addListener("click", () => {
      const service = new window.google.maps.places.PlacesService(map);
      service.getDetails({ placeId: place.place_id }, (details, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          infoWindow.setContent(`
            <div><strong>${details.name}</strong><br>
            Rating: ${details.rating || "N/A"}<br>
            ${details.formatted_address}</div>
          `);
          infoWindow.open(map, marker);
        }
      });
    });

    setMarkers((prevMarkers) => [...prevMarkers, marker]);
  };

  // 마커 초기화
  const clearMarkers = () => {
    markers.forEach((marker) => marker.setMap(null));
    setMarkers([]);
  };

  // 수수료 무료 검색 상태 토글
  const toggleFreeFeeSearch = () => {
    setIsFreeFeeEnabled(!isFreeFeeEnabled);
    if (isFreeFeeEnabled) {
      fetchFreeATMDataFromDB();
    } else {
      clearMarkers();
    }
  };

  // 버튼에 테두리 스타일 추가
  const buttonStyle = {
    padding: "10px",
    margin: "10px",
    border: "2px solid #333", // 테두리 추가
    borderRadius: "5px",
    backgroundColor: "#f5f5f5", // 배경 색상
    cursor: "pointer",
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div ref={mapRef} style={{ width: "100%", height: "600px" }}></div>

      <button style={buttonStyle} onClick={showATMs}>
        Show ATMs
      </button>
      <button style={buttonStyle} onClick={searchInViewPort}>
        Search in Viewport
      </button>
      <button style={buttonStyle} onClick={toggleFreeFeeSearch}>
        {isFreeFeeEnabled ? "수수료 무료 (On)" : "수수료 무료 (Off)"}
      </button>
    </div>
  );
};

export default ATMMap;
