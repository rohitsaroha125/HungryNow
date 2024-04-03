"use client";
import { useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

export default function ImagePicker({ label }: { label: string }) {
  const [pickedImg, setPickedImg] = useState<any>(null);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (url) => {
        setPickedImg(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImg ? (
            <Image src={pickedImg} fill alt="Preview Image" />
          ) : (
            <p>No Image Selected</p>
          )}
        </div>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name="image"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
}
