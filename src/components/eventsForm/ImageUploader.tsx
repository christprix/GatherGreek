"use client";

import { CldUploadWidget } from "next-cloudinary";
import { addImageToEvent } from "@/app/actions";

export default function ImageUploader({ eventId }: any) {
  return (
    <CldUploadWidget
      uploadPreset="dbmlvgit"
      onSuccess={(results) => {
        console.log("Public ID", results?.info?.public_id);
        const imageId = results?.info?.public_id;
        addImageToEvent(eventId, imageId);
      }}
    >
      {({ open }) => {
        return <button onClick={() => open()}>Upload an Image</button>;
      }}
    </CldUploadWidget>
  );
}
