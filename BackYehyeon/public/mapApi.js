class ATMMap {
    constructor() {
        this.map = null;
        this.markers = [];
        this.userPosition = {
            lat: 35.6814104676112, // 하드코딩된 위치 (도쿄)
            lng: 139.76708188085172
        };
        this.userLocationCountry = null;
        this.atmKeywords = [];
        this.freeAtmKeywords = [];
        this.userId = "66d78fa552e9e51e1735281d"; // 하드코딩된 사용자 ID

        // 상태 관리
        this.isFreeFeeEnabled = false; // '수수료 무료' 버튼 상태 관리

        // 메서드 바인딩
        this.showATMs = this.showATMs.bind(this);
        this.searchInViewPort = this.searchInViewPort.bind(this);
        this.clearMarkers = this.clearMarkers.bind(this);
        this.toggleFreeFeeSearch = this.toggleFreeFeeSearch.bind(this);
        this.fetchFreeATMDataFromDB = this.fetchFreeATMDataFromDB.bind(this);
    }

    // 사용자 위치를 확인한 후에만 맵을 초기화
    async initMap() {
        if (!this.userPosition) {
            console.error("User position is not available.");
            return;
        }

        if (typeof google === "undefined") {
            console.error("Google Maps API is not loaded.");
            return;
        }

        // 동적으로 라이브러리 로드
        const { Map } = await google.maps.importLibrary("maps");

        const mapProp = {
            center: new google.maps.LatLng(this.userPosition.lat, this.userPosition.lng),
            zoom: 15,
            mapId: "1113371ed7243b5"
        };

        this.map = new Map(document.getElementById("googleMap"), mapProp);
        console.log("Google Map initialized at position: ", this.userPosition);

        // 사용자 위치에 마커 추가
        this.addMarker(this.userPosition, "You are here!");
    }

    // 사용자 위치를 기반으로 마커 추가
    addMarker(position, title) {
        const marker = new google.maps.Marker({
            position: position,
            map: this.map,
            title: title
        });
        this.markers.push(marker);
    }

    // 사용자 위치와 국가 정보를 가져옴
    getUserLocation(geocoder) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userPosition = {
                        lat: 35.6814104676112, // 하드코딩된 위치 (도쿄)
                        lng: 139.76708188085172
                    };

                    // 이제 맵을 초기화
                    this.initMap();

                    // 국가 정보 가져오기
                    this.getCountryInfo(geocoder);
                }
            );
        } else {
            this.handleLocationError(false);
        }
    }

    // 국가 정보를 가져오는 함수
    getCountryInfo(geocoder) {
        geocoder.geocode({ location: this.userPosition }, (results, status) => {
            if (status === "OK" && results[0]) {
                const countryComponent = results[0].address_components.find(component =>
                    component.types.includes("country")
                );
                if (countryComponent) {
                    this.userLocationCountry = countryComponent.long_name;
                    console.log("User is located in:", this.userLocationCountry);
                    this.fetchATMDataFromDB(); // 국가 정보가 확인된 후에만 ATM 데이터를 가져옴
                } else {
                    console.log("Country information not found.");
                }
            } else {
                console.log("Geocode failed due to:", status);
            }
        });
    }

    // MongoDB에서 사용자 위치와 일치하는 ATM 데이터를 가져옴
    async fetchATMDataFromDB() {
        try {
            if (!this.userLocationCountry) {
                return;
            }

            const response = await fetch(`/getAtms/${this.userLocationCountry}`);
            const data = await response.json();

            if (data && data.length > 0) {
                this.atmKeywords = data;
                console.log("ATM Keywords:", this.atmKeywords);
            } else {
                alert("해당 국가의 ATM 데이터를 찾을 수 없습니다.");
            }
        } catch (error) {
            console.error('Error fetching ATM data:', error);
        }
    }

    // MongoDB에서 사용자 위치와 일치하고 사용자의 카드 기반으로 수수료가 무료인 ATM 데이터를 가져옴
    async fetchFreeATMDataFromDB() {
        try {
            if (!this.userLocationCountry || !this.userId) {
                return;
            }

            const response = await fetch(`/getAtmByUser/${this.userId}/${this.userLocationCountry}`);
            const data = await response.json();

            if (data && data.length > 0) {
                this.freeAtmKeywords = data;
                console.log("Free ATM keywords: ", this.freeAtmKeywords);
            } else {
                alert("사용자 카드로 사용할 수 있는 수수료 무료 ATM기가 없습니다.");
            }

        } catch (error) {
            console.error('Error fetching free ATM data:', error);
        }
    }

    // 'Show ATMs' 버튼 클릭 시 호출
    async showATMs() {
        // 수수료 무료 상태에 따라 검색 키워드를 설정
        const keywords = this.isFreeFeeEnabled ? this.freeAtmKeywords : this.atmKeywords;

        if (!this.userPosition || !keywords.length) {
            alert("사용자의 위치 또는 ATM 키워드를 확인할 수 없습니다.");
            return;
        }

        this.clearMarkers();
        this.map.setCenter(this.userPosition);

        const service = new google.maps.places.PlacesService(this.map);

        // 각 키워드에 대해 검색 수행
        keywords.forEach(keyword => {
            const request = {
                location: this.userPosition,
                radius: '1000',
                keyword: keyword
            };

            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results.length) {
                    results.forEach(result => this.createMarker(result));
                } else {
                    console.log(`검색 결과가 없습니다. 키워드: ${keyword}`);
                }
            });
        });
    }

    // '이 지역 검색' 버튼 클릭 시 호출
    async searchInViewPort() {
        // 수수료 무료 상태에 따라 검색 키워드를 설정
        const keywords = this.isFreeFeeEnabled ? this.freeAtmKeywords : this.atmKeywords;

        if (!this.userPosition || !keywords.length) {
            alert("사용자의 위치 또는 ATM 키워드를 확인할 수 없습니다.");
            return;
        }

        this.clearMarkers();
        const bounds = this.map.getBounds();
        const service = new google.maps.places.PlacesService(this.map);

        // 각 키워드에 대해 검색 수행
        keywords.forEach(keyword => {
            const request = {
                bounds: bounds,
                keyword: keyword
            };

            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results.length) {
                    results.forEach(result => this.createMarker(result));
                } else {
                    console.log(`검색 결과가 없습니다. 키워드: ${keyword}`);
                }
            });
        });
    }

    // clearMarkers 메서드
    clearMarkers() {
        this.markers.forEach(marker => marker.setMap(null));
        this.markers = [];
    }

    // '수수료 무료' 버튼 상태 관리 및 클릭 시 처리
    toggleFreeFeeSearch() {
        this.isFreeFeeEnabled = !this.isFreeFeeEnabled; // 상태 토글

        const freeFeeButton = document.getElementById('searchByMyCard');
        if (this.isFreeFeeEnabled) {
            freeFeeButton.textContent = '수수료 무료 (On)';
            freeFeeButton.classList.add('on');
            freeFeeButton.classList.remove('off');
            this.fetchFreeATMDataFromDB(); // 수수료 무료 ATM 검색 실행
        } else {
            freeFeeButton.textContent = '수수료 무료 (Off)';
            freeFeeButton.classList.add('off');
            freeFeeButton.classList.remove('on');
            this.clearMarkers(); // 수수료 무료 ATM 표시 제거
        }
    }

    // 마커 생성
    createMarker(place) {
        const marker = new google.maps.Marker({
            position: place.geometry.location,
            map: this.map
        });

        const infoWindow = new google.maps.InfoWindow();
        marker.addListener('click', () => {
            const service = new google.maps.places.PlacesService(this.map);
            service.getDetails({ placeId: place.place_id }, (details, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    infoWindow.setContent(`
                        <div><strong>${details.name}</strong><br>
                        Rating: ${details.rating || 'N/A'}<br>
                        ${details.formatted_address}</div>
                    `);
                    infoWindow.open(this.map, marker);
                } else {
                    infoWindow.setContent('No details available');
                    infoWindow.open(this.map, marker);
                }
            });
        });

        this.markers.push(marker);
    }

    handleLocationError(browserHasGeolocation) {
        const infoWindow = new google.maps.InfoWindow();
        infoWindow.setPosition(this.map.getCenter());
        infoWindow.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(this.map);
    }
}

// Google Maps API가 로드된 후 호출되는 초기화 함수
function initializeATMMap() {
    const geocoder = new google.maps.Geocoder();
    window.atmMap = new ATMMap();
    atmMap.getUserLocation(geocoder);

    // '수수료 무료' 버튼 상태 관리
    const freeFeeButton = document.getElementById('searchByMyCard');
    if (freeFeeButton) {
        freeFeeButton.addEventListener('click', () => {
            atmMap.toggleFreeFeeSearch();
        });
    }

    // 기타 버튼 리스너 등록
    const showAtmsButton = document.getElementById('showAtmsButton');
    if (showAtmsButton) {
        showAtmsButton.addEventListener('click', atmMap.showATMs.bind(atmMap));
    }

    const searchInViewPortButton = document.getElementById('searchInViewPortButton');
    if (searchInViewPortButton) {
        searchInViewPortButton.addEventListener('click', atmMap.searchInViewPort.bind(atmMap));
    }
}
