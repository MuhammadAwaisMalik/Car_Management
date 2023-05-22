import React from "react";

const Input = ({
  id,
  className,
  value,
  disabled,
  type,
  change,
  placeholder,
  label,
  labelClass,
  name,
  Err,
}) => {
  return (
    <>
      <div className="my-2 form-group">
        <label htmlFor={id} className={`form-label ${labelClass}`}>
          {label}
        </label>
        <input
          type={type}
          className={className}
          value={value}
          id={id}
          name={name}
          disabled={disabled || null}
          onChange={change || null}
          placeholder={placeholder || null}
        />
      </div>
      <span className="text-danger">{Err || null}</span>
    </>
  );
};

export default Input;

export const InputGroup = ({
  id,
  className,
  value,
  disabled,
  type,
  change,
  placeholder,
  label,
  labelClass,
  name,
  children,
  autoComplete,
  Err,
}) => {
  return (
    <>
      <div className="my-2">
        <label htmlFor={id} className={`form-label ${labelClass}`}>
          {label}
        </label>
        <div className="input-group">
          <span className="input-group-text" id="">
            {children}
          </span>
          <input
            type={type}
            id={id}
            autoComplete={autoComplete}
            className={`form-control ${className}`}
            name={name}
            value={value}
            disabled={disabled || null}
            onChange={change || null}
            placeholder={placeholder || null}
          />
        </div>
        <div className="text-danger">{Err || null}</div>
      </div>
    </>
  );
};
