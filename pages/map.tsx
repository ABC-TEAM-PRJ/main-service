import Script from 'next/script';
import Header from '../components/common/Header'
import Mapside from './mapside'
import MarkerData from './markerData'
import { useEffect } from "react";

interface MapProps {
  latitude: number;
  longitude: number;
}

declare global {
    interface Window {
      kakao: any;
    }
  }

function Map({ latitude, longitude }: MapProps) {
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
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          lever: 3, //지도 확대레벨
        };

        const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ]
        const geocoder = new window.kakao.maps.services.Geocoder(); //// 해당 위치 값이 어딘지 알게해주는 역할

        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [latitude, longitude]);

  return (
    
    <>          
    <Header/>
    {/* <Mapside/> */}
    <Script 
        strategy='beforeInteractive' 
        src={ `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`}
      />
      <div className='flex'>
      <Mapside/>
       {/* <div className='' style={{aspectRatio: '320/220'}} id="map" /> */}
       <div className='' style={{width: "100vh", height: "100vh", right: "0px"}} id="map" />
      
     </div>

    </>
  );
}

export default Map;