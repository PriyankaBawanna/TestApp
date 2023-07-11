import React from "react";

const RadioButton = ({
  value,
  label,
  checked,
  onChange,
  className,
  name,
  id,
}) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        id={id}
      />
      {label}
    </label>
  );
};

export default RadioButton;
