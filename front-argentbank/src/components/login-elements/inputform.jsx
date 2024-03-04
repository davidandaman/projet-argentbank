export default function Input({
  className,
  label,
  htmlFor,
  id,
  type,
  reference,
  placeholder,
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{label} </label>
      <input type={type} id={id} ref={reference} placeholder={placeholder} />
    </div>
  );
}
