import { useEffect, useRef } from 'react';


function NaverMap() {
    const mapElement = useRef(null);


    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        const location = new naver.maps.LatLng(37.579724108905, 126.92388546717);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });
    }, []);


    return <div ref={mapElement} style={{ minHeight: '400px' }} />;
}


export default NaverMap;