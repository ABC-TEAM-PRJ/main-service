import Script from 'next/script';
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

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e4109694aa04710cb709f1d88e81eaf6&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(latitude, longitude),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
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
    <Script 
        strategy='beforeInteractive' 
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=e4109694aa04710cb709f1d88e81eaf6&autoload=false`}
      />
    <div style={{aspectRatio: '320/220'}} id="map" />
    </>
  );
}

export default Map;