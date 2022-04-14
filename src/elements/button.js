export default function Button({ title, icon, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={disabled ? "button-primary disabled" : "button-primary"}
    >
      {icon && <img src={icon} className="icon"></img>}
      {title}
    </button>
  );
}
