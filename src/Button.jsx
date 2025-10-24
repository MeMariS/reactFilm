function Button({ text, onClick, className = '', icon, variant = 'primary' }) {
  const base = 'px-4 py-2 rounded hover:cursor-pointer flex items-center';

  const styles = {
    primary: 'bg-pink-50 hover:bg-pink-200',
    secondary: 'border border-pink-300 hover:bg-pink-200',
    simple: '',
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
