import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../images/Blue_Long_Logo.svg";

function Footer() {
  return (
    <>
      <footer className="w-full flex justify-between items-start px-10 py-6 bg-gray-50 rounded-lg ">
        <div className="flex flex-col">
          <Link to="/">
            <h1 className="font-medium text-xl px-30 py-5">ReactFLix</h1>
          </Link>
          <div className="flex px-25">
            <Link to="/">
              <Button text="Home" variant="simple" className="px-5" />
            </Link>
            <Link to="/favorites">
              <Button text="Favorites" variant="footer" className="px-5" />
            </Link>
          </div>
        </div>
        <div className="flex justify-end mt-10 mr-25">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            className="flex items-center gap-2"
          >
            <span>Attribution:</span>
            <img src={logo} alt="" className="w-[200px] h-[100px] bottom-5" />
          </a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
