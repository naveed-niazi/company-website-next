import React from "react";
import "react-phone-number-input/style.css";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";

export const FormItem = ({
  type,
  label,
  error,
  name,
  placeholder,
  isRequired,
  register,
  control,
  defaultValue,
  options,
}) => {
  if (type === "text" || type === "email")
    return (
      <div className="md:mx-4 mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          className="form-input h-10"
          defaultValue={defaultValue ?? ""}
          type={type}
          placeholder={placeholder}
          {...register(name, {
            required: isRequired ? true : false,
          })}
        />

        {error ? (
          error.type === "required" ? (
            <p className="form-input-error">{`${label} is required`}</p>
          ) : (
            <p className="form-input-error">{`Invalid ${label}`}</p>
          )
        ) : (
          ""
        )}
      </div>
    );
  if (type === "tel")
    return (
      <div className="md:mx-4 mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <PhoneInputWithCountry
          international
          name={name}
          control={control}
          defaultCountry="US"
          placeholder={placeholder}
          rules={{ required: true, validate: isValidPhoneNumber }}
        />
        {error ? (
          error.type === "required" ? (
            <p className="form-input-error">{`${label} is required`}</p>
          ) : (
            <p className="form-input-error">{`Invalid ${label}`}</p>
          )
        ) : (
          ""
        )}
      </div>
    );
  if (type === "select")
    return (
      <div className="md:mx-4  mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <select
          className="form-input h-10 "
          defaultValue={""}
          {...register(name, { required: isRequired ? true : false })}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {error ? (
          error.type === "required" ? (
            <p className="form-input-error">{`${label} is required`}</p>
          ) : (
            <p className="form-input-error">{`Invalid ${label}`}</p>
          )
        ) : (
          ""
        )}
      </div>
    );

  if (type === "multiline")
    return (
      <div className="md:mx-4 mb-2">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <textarea
          className="form-input resize-none"
          {...register(name, { required: isRequired ? true : false })}
          rows="7"
          placeholder={placeholder}
        ></textarea>
        {error ? (
          error.type === "required" ? (
            <p className="form-input-error">{`${label} is required`}</p>
          ) : (
            <p className="form-input-error">{`Invalid ${label}`}</p>
          )
        ) : (
          ""
        )}
      </div>
    );
};

export default FormItem;
