function Button({ text }) {
  return (
    <button className="px-4 py-2 bg-pink-50 rounded hover:cursor-pointer hover:bg-pink-200 transition">
      {text}
    </button>
  );
}
export default Button;
