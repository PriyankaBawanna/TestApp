import React, { useState } from "react";

function Input(props: any) {
  const {
    placeholder,
    type,
    name,
    value,
    onChange,
    min,
    max,
    className,
    label,
  } = props;
  const [error, setError] = useState(false);

  return (
    <div>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
    </div>
  );
}
export default Input;
