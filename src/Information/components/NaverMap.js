import { useEffect, useRef } from 'react';


function NaverMap() {
    const mapElement = useRef(null);
    const markerLocation = { lat: 37.579724108905, lng: 126.92388546717 };
    const mapOptions = {
        center: markerLocation,
        zoom: 17,
        draggable: false,
        zoomControl: true,
        zoomControlOptions: {
            position: window.naver.maps.Position.TOP_RIGHT,
        },
    };


    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        const map = new naver.maps.Map(mapElement.current, mapOptions);

        const marker = new naver.maps.Marker({
            position: markerLocation,
            map,
        });

        // Add event listener for zoom_changed, dragend, and mousewheel events
        naver.maps.Event.addListener(map, 'zoom_changed', () => {
            map.panTo(markerLocation);
        });
        naver.maps.Event.addListener(map, 'dragend', () => {
            map.panTo(markerLocation);
        });
        naver.maps.Event.addListener(map, 'mousewheel', (e) => {
            const newZoom = map.getZoom() + e.deltaY * -0.1;
            if (newZoom < 1) {
                map.setZoom(1);
            } else if (newZoom > 18) {
                map.setZoom(18);
            } else {
                map.setZoom(newZoom);
            }
            map.panTo(markerLocation);
        });
    }, []);


    return <div ref={mapElement} style={{ minHeight: '400px' }} />;
}


export default NaverMap;
