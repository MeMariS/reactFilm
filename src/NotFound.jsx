import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl pb-[5px]">Ошибкак 404</h1>
        <p className="pb-[15px]">Страница не найдена</p>
        <Link to="/">
          <button className="px-4 py-2 bg-pink-50 rounded hover:cursor-pointer hover:bg-pink-200 transition">
            Вернуться на главную
          </button>
        </Link>
      </div>
    </>
  );
}
export default NotFound;
