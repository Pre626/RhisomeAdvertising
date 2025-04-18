import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '90%',
  height: '400px',
};

const center = {
  lat: 18.509890,
  lng: 73.807182,
};

const GoogleMapComponent = () => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  const handleMarkerClick = () => {
    setShowInfoWindow(true);
  };

  const handleMapClick = () => {
    setShowInfoWindow(false);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDhsUNYjj3klc7cNWU34cDHXlqpguD3Hgw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onClick={handleMapClick}
      >
        <Marker position={center} onClick={handleMarkerClick} />

        {showInfoWindow && (
          <InfoWindow position={center} onCloseClick={() => setShowInfoWindow(false)}>
            <div>
              <h3>Saarathi Shivalik</h3>
              <p>
                Survey No 755, Mayur 11 Building, 11, Karve Rd,<br />
                Opposite Mrutyunjayeshwar Temple, Mayur Colony,<br />
                Kothrud, Pune, Maharashtra 411038
              </p>
              <p><strong>Rating:</strong> 4.0 ⭐ (6 reviews)</p>
              <a href="https://www.google.com/maps/place/Saarathi+Shivalik/" target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
