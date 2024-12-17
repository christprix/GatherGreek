"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { addImageToEvent } from "@/app/actions";
import { useState } from "react";

type Uploadresults = {
  info: {};
  event: "success";
};

export default function ImageUploader({ eventId }: any) {
  const [resource, setResource] = useState("");
  return (
    <>
      <CldUploadWidget
        uploadPreset="dbmlvgit"
        // onSuccess={(results: Uploadresults) => {
        //   setResource(results.info.public_id);
        //   console.log("Public ID", results.info.public_id);
        // }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
      {resource && (
        <CldImage
          width={"500"}
          height={"500"}
          src={resource}
          alt="Description of my image"
        />
      )}
    </>
  );
}
