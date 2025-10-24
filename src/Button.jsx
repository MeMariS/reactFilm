function Button({ text, onClick, className = "", icon, variant = "default" }) {
  const base = "px-4 py-2 rounded hover:cursor-pointer";

  const styles = {
    default: "bg-pink-50 hover:bg-pink-200",
    footer: "",
  };
  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {text} {icon}
    </button>
  );
}
export default Button;
