import React, { useEffect, useRef, useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, ZoomControl, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw';
import osm from './osm-provider'
import "./leaflet__map.css"
import "leaflet/dist/leaflet.css"
import L from "leaflet";
import "leaflet-geosearch/assets/css/leaflet.css"
import "leaflet-draw/dist/leaflet.draw.css"
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import SearchField from './leaflet_search';


const AssetMap = ({ newData, setNewData }) => {

  const center = { lat: 16.806463158856577, lng: 96.15468108141746 }

  const [position, setPosition] = useState(center);
  const [mapLayers, setMapLayers] = useState([]);
  // const [draggable, setDraggable] = useState(true)
  const ZOOM_LEVEL = 18;

  console.log("Maplayers", mapLayers)

  //--------------Setting Lat Long to api---------------------------
  useEffect(() => {
    setNewData({
      ...newData,
      longitude: position.lng,
      latitude: position.lat
    })
  }, [position])

  //------------------Handling draggable marker----------------------
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )

  //------------------To show icon correctly-------------------------
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12.5, 41],
    popupAnchor: [6, -41],
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  //------------------Create, Edit and Delete Geofencing---------------------

  const _onCreate = (e) => {
    const { layerType, layer } = e;

    if (layerType === "polygon") {
      const { _leaflet_id } = layer;
      setMapLayers(mapLayers => [...mapLayers, { layerName: layerType, id: _leaflet_id, latlngs: layer.getLatLngs()[0] }])
    } else if (layerType === "circle") {
      const { _leaflet_id } = layer;
      setMapLayers(mapLayers => [...mapLayers, { layerName: layerType, id: _leaflet_id, latlngs: layer.getLatLng(), radius: layer._mRadius }])
    } else {
      console.log("Layer Type Error Occured")
    }
  }

  //--------------------Updating Edit data to Maplayer-----------------------------

  const _onEditPath = (e) => {
    console.log("On Edit", e)

    const { layers: { _layers } } = e;


    // _latlng for "Circle". _latlngs for "Polygran".
    Object.values(_layers).map(({ _leaflet_id, _latlng, _mRadius, _latlngs }) => {
      if (typeof _mRadius !== "undefined") {
        return setMapLayers(mapLayers => mapLayers.map(l => l.id === _leaflet_id ? { ...l, latlngs: { ..._latlng }, radius: _mRadius } : l))
      } else {
        return setMapLayers(mapLayers => mapLayers.map(l => l.id === _leaflet_id ? { ...l, latlngs: _latlngs } : l))
      }
    })
  }

  //-------------------Delete data inside MapLayer-------------------------------

  const __onDeleted = (e) => {
    console.log("On Delete", e)

    const { layers: { _layers } } = e;

    Object.values(_layers).map(({ _leaflet_id }) => (
      setMapLayers(mapLayers => mapLayers.filter(l => l.id !== _leaflet_id))
    ))

  }

  return (
    <div style={{ position: "relative" }}>
      <MapContainer
        center={position}
        zoom={ZOOM_LEVEL}
        zoomControl={false}
        className="leaflet-container"
      >
        <FeatureGroup>
          <EditControl
            position='bottomright'
            onEdited={_onEditPath}
            onCreated={_onCreate}
            onDeleted={__onDeleted}
            draw={{
              rectangle: false,
              polyline: false,
              circlemarker: false,
              marker: false,
            }}
          />
        </FeatureGroup>
        <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
        <Marker
          draggable={true}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}>
        </Marker>
        <ZoomControl position="bottomright" />
        <SearchField setPosition={setPosition} />
      </MapContainer>
    </div>
  )
}

export default AssetMap