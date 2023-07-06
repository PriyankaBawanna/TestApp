import React, { useState } from "react";

function Button(props: any) {
  const { onClick, label, className, disabled } = props;

  return (
    <div>
      <button disabled={disabled} onClick={onClick} className={className}>
        {label}
      </button>
    </div>
  );
}
export default Button;
