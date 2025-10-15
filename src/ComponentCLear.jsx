import { Button } from "@headlessui/react";
import { useState } from "react";
import ButtonClear from "./ButtonClear";

function ComponentCLear() {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");

  const resetFilters = () => {
    setGenre("");
    setYear("");
    setRating("");
  };
  return (
    <>
      <ButtonClear onReset={resetFilters}></ButtonClear>
    </>
  );
}
export default ComponentCLear;
