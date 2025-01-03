"use client";

import { CldImage, CldUploadWidget } from "next-cloudinary";
import { useState } from "react";

type Uploadresults = {
  info: {};
  event: "success";
};

export default function ImageUploader({ setImagepath }: any) {
  return (
    <>
      <CldUploadWidget
        uploadPreset="dbmlvgit"
        onSuccess={(results: Uploadresults | any) => {
          console.log("Public ID", results.info.public_id);
          setImagepath(results.info.url);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
}
