export default function FormField({ id, label, as = "input", children, className = "", hideLabel = false, ...props }) {
  const Control = as;
  return (
    <div className={`shopery-field ${className}`}>
      <label className={hideLabel ? "visually-hidden" : "form-label"} htmlFor={id}>{label}</label>
      <Control id={id} name={id} className={as === "select" ? "form-select" : "form-control"} {...props}>
        {children}
      </Control>
    </div>
  );
}
