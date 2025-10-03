function Button({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-pink-50 rounded hover:cursor-pointer hover:bg-pink-200 transition ${className}`}
    >
      {text}
    </button>
  );
}
export default Button;
