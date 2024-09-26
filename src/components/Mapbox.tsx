"use client";
import * as React from "react";
import Map from "react-map-gl";
import { useEffect, useState } from "react";

export default function Mapbox() {
  const [defaultLocation, setDefaultLocation] = useState({});
  const [defaultLongitude, setDefaultLongitude] = useState(0);
  const [defaultLatitude, setDefaultLatitude] = useState(0);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setDefaultLocation({ latitude, longitude });
        setDefaultLatitude(latitude);
        setDefaultLongitude(longitude);
      });
    }
  });
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      initialViewState={{
        latitude: 33.7488,
        longitude: -84.3877,
        zoom: 9,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}
