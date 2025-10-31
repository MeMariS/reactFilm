import { Field, Label, Select } from "@headlessui/react";

const allRatings = ["All", "7.8", "8", "8.1", "8.3", "8.5", "8.6", "8.8"];

function RatingSelect({ value, onChange }) {
  return (
    <>
      <Field className={"flex "}>
        <Label>Ratings</Label>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="hover:cursor-pointer border border-pink-300 rounded-md"
        >
          {allRatings.map((rating) => (
            <option key={rating} value={rating}>
              {rating === "All" ? "All" : rating}
            </option>
          ))}
        </Select>
      </Field>
    </>
  );
}
export default RatingSelect;
