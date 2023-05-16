import React from "react";

const Button = ({
  type,
  className,
  children,
  click,
  data_target,
  data_toogle,
  data_dismiss,
}) => {
  return (
    <button
      type={type}
      className={className}
      onClick={click}
      data-bs-toggle={data_toogle}
      data-bs-target={data_target}
      data-bs-dismiss={data_dismiss}
    >
      {children}
    </button>
  );
};

export default Button;
