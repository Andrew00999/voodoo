import React, { useState } from 'react';
import cl from './map.module.scss';
import { GoogleMap } from '@react-google-maps/api';
import { lightTheme } from './Theme';
import { CurrentLocation } from '../CurrentLocation';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map = ({ center }) => {
  const [selectedMarker, setSelectedMarker] = useState('');

  const mapRef = React.useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, [])

  const defaultOptions = {
    panControl: true,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    clickableIcons: true,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    styles: lightTheme
  }

  return (
    <div className={cl.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <CurrentLocation position={center} />
      </GoogleMap>
    </div>
  )
}

export { Map }