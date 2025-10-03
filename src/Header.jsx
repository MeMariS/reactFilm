import { Link } from "react-router";
import Button from "./Button";

function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4">
      <Link to="/">
        <h1 className="text-xl font-bold text-red-500">ReactFlix</h1>
      </Link>
      <nav className="flex gap-4">
        <Link to="/">
          <Button text="Home" />
        </Link>
        <Link to="/favorites">
          <Button text="Favorites" />
        </Link>
      </nav>
    </header>
  );
}
export default Header;
