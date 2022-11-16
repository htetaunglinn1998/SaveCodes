import { useEffect } from 'react';
import { useMap } from 'react-leaflet'
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

const SearchField = ({ setPosition }) => {
    const searchControl = new GeoSearchControl({
        provider: new OpenStreetMapProvider,
        style: 'bar',
        showMarker: false, // optional: true|false  - default true
        showPopup: false,// optional: true|false  - default false
        animateZoom: true,
    });

    const map = useMap();
    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    function searchEventHandler(result) {
        let centerPosition = { lat: parseFloat(result?.location?.raw.lat), lng: parseFloat(result?.location?.raw.lon) }
        setPosition(centerPosition)
    }

    map.on('geosearch/showlocation', searchEventHandler);

    return null;
};

export default SearchField