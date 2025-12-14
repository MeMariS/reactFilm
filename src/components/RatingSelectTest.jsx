import { Field, Label, Select } from "@headlessui/react";

const allRatings = [
  { label: "All", value: "All" },
  { label: "4 - 5", value: "4-5" },
  { label: "5 - 6", value: "5-6" },
  { label: "6 - 7", value: "6-7" },
  { label: "7 - 8", value: "7-8" },
  { label: "8+", value: "8+" },
];

function RatingSelectTest({ value, onChange }) {
  return (
    <>
      <Field className="flex items-center gap-2 hover:cursor-pointer border border-gray-200 rounded-md px-2">
        <Label>Ratings</Label>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="hover:cursor-pointer"
        >
          {allRatings.map((rating) => (
            <option key={rating.value} value={rating.value}>
              {rating.label}
            </option>
          ))}
        </Select>
      </Field>
    </>
  );
}
export default RatingSelectTest;
