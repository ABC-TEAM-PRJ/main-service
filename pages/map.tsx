import Script from 'next/script';
import Header from '../components/common/Header'
import Mapside from '../components/map/mapside'
import { FC, useEffect } from "react";

interface MapProps {
  latitude: number;
  longitude: number;
}

declare global {
    interface Window {
      kakao: any;
    }
  }


const Map: FC<{address: string}> = ({ address }) => {
  useEffect(() => {
    const mapScript = document.createElement("script");
    const NEXT_PUBLIC_KAKAOMAP_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;
    // const ps = new window.kakao.maps.services.Places();
    // ps.keywordSearch('입력 값', placesSearchCB);
    
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        

        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성

        // 주소로 좌표를 검색
        geocoder.addressSearch('서울시 금천구 가산디지털1로 145', function (result: any, status: any) {
          if(status === window.kakao.maps.services.Status.OK){
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)
            //지도생성
            const container = document.getElementById("map");
            const options = {
              center: coords,
              lever: 3, //지도 확대레벨
            };
            // 지도생성
            const map = new window.kakao.maps.Map(container, options);
          
            // 결과값으로 받은 위치를 마커로 표시
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            }) 
            marker.setMap(map); 
            
            //지도에 클릭 이벤트 등록
            window.kakao.maps.event.addListener(map, 'click', function(mouseEvent:any){
              // 클릭한 위도, 경도 정보를 가져옴
              var latlng = mouseEvent.latLng;

              // 마커위치를 클릭한 위치로 옮김
              marker.setPosition(latlng);
            
              var message = '위도: ' + latlng.getLat() + ' , ';
              message += '경도: ' + latlng.getLng() + ' .';

        
              var infowindow = new window.kakao.maps.InfoWindow({
                content: message
            });
              infowindow.open(map, marker);

              // 지도의 중심을 결과값으로 받은 위치로 이동
              map.setCenter(coords);
            })


          } else{ // 정상적으로 좌표검색 안될경우 디폴트 좌표로 검색
            const container = document.getElementById("map");
            const options = {
              center: new window.kakao.maps.LatLng(33.450701, 126.570667),
              lever: 3, //지도 확대레벨
            };
            // 지도생성
            const map = new window.kakao.maps.Map(container, options);
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            })
            marker.setMap(map);
          }
        })


      });//onLoadKakaoMap
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [address]);

  return (
    
    <>          
    <Header/>
    {/* <Mapside/> */}
    <Script 
        strategy='beforeInteractive' 
        src={ `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`}
      />
      <div className='flex relative w-full'>
      <Mapside/>
       {/* <div className='' style={{aspectRatio: '320/220'}} id="map" /> */}
       <div className='' style={{width: "100%", height: "100vh", right: "0px"}} id="map" />
      
     </div>

    </>
  );
}

export default Map;