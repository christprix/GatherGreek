"use client";

import { useEffect, useState } from "react";

export default function LocationFinder() {
  const [defaultLocation, setDefaultLocation] = useState({});

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(({ coords }) => {
  //       const { latitude, longitude } = coords;
  //       setDefaultLocation({ latitude, longitude });
  //     });
  //   }
  // });

  return (
    <>
      <select
        defaultValue={"Tallahassee"}
        className="select select-bordered w-40 rounded-lg m-3 px-4 py-2 text-gray-800 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option>Tallahassee</option>
        {/* {defaultLocation?.longitude} {defaultLocation?.latitude} */}
      </select>
    </>
  );
}
