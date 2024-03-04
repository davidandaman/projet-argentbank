export default function PrimaryButton({ className, value, handleClick, type }) {
  return (
    <div className="account-content-wrapper cta">
      <button type={type} className={className} onClick={handleClick}>
        {value}
      </button>
    </div>
  );
}
