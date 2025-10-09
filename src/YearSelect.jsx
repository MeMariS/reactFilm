import { Select } from "@headlessui/react";

function YearSelect({ movies, value, onChange }) {
  const allYears = movies.map((m) => m.year);
  const uniqueYears = Array.from(new Set(allYears));
  const years = ["All", ...uniqueYears];
  return (
    <>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
    </>
  );
}
export default YearSelect;
