"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

type Uploadresults = {
  info: {};
  event: "success";
};

export default function ImageUploader() {
  const [resource, setResource] = useState("");
  return (
    <>
      <CldUploadWidget
        uploadPreset="dbmlvgit"
        // onSuccess={(results: Uploadresults | any) => {
        //   console.log("Public ID", results.info.public_id);
        //   setResource(results.info.public_id);
        // }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </>
  );
}
