"use client";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Calendar() {
  const [selected, setSelected] = useState<Date>();
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      className="border-2 rounded-md"
    />
  );
}
