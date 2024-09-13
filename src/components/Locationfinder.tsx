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
      <div>
        Atlanta {/* {defaultLocation?.longitude} {defaultLocation?.latitude} */}
      </div>
    </>
  );
}
