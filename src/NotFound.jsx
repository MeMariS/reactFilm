import { Link } from "react-router";
import Button from "./Button";

function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl pb-[5px]">Error 404</h1>
        <p className="pb-[15px]">Страница не найдена</p>
        <Link to="/">
          <Button text="Come back to main page" />
        </Link>
      </div>
    </>
  );
}
export default NotFound;
