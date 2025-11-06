function Button({ text, onClick, className = "", icon, variant = "primary" }) {
  const base = "px-4 py-2 rounded hover:cursor-pointer flex items-center";

  const styles = {
    primary: "",
    secondary: "border border-gray-200 hover:bg-gray-300",
    simple: "",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {text}
      <span className="ml-2">{icon}</span>
    </button>
  );
}
export default Button;
