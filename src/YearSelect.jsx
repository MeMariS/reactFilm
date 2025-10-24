import { Field, Label, Select } from "@headlessui/react";

const allYears = [
  "All",
  "1994",
  "1997",
  "1999",
  "2001",
  "2008",
  "2010",
  "2014",
  "2017",
  "2019",
];

function YearSelect({ value, onChange }) {
  return (
    <>
      <Field className={"flex "}>
        <Label>Years</Label>
        <Select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="hover:cursor-pointer"
        >
          {allYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
      </Field>
    </>
  );
}
export default YearSelect;
