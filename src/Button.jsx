function Button({ text, onClick, className = '', icon, variant = 'default' }) {
  const base = 'px-4 py-2 rounded hover:cursor-pointer flex items-center';

  const styles = {
    default: 'bg-pink-50 hover:bg-pink-200',
    footer: '',
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
