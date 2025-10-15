import { Button } from "@headlessui/react";

function ButtonClear({ onReset }) {
  return (
    <>
      <Button onClick={onReset}>Clear All</Button>
    </>
  );
}
export default ButtonClear;
