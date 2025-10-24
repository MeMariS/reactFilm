import { Link } from "react-router";
import Button from "./Button";
import logo from "./images/Blue_Long_Logo.svg";

function Footer() {
  return (
    <>
      <footer className="w-full flex flex-col px-10 py-6 bg-amber-200 rounded-lg border-2">
        <Link to="/">
          <h1 className="font-medium text-xl px-30 py-5">ReactFLix</h1>
        </Link>
        <Link to="/">
          <Button text="Home" variant="simple" className="px-30" />
        </Link>
        <Link to="/favorites">
          <Button text="Favorites" variant="footer" className="px-30" />
        </Link>
        <div className="flex justify-center mt-10">
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
