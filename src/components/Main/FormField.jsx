import React from 'react';

const FormField = ({ name, label, type, options, required, value, onChange }) => {
  const id = `${name}-input`;

  const handleChange = (e) => {
    const newValue = type === 'file' ? e.target.files[0] : e.target.value;
    onChange(newValue);
  };

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            id={id}
            name={name}
            className="flex flex-col justify-center py-1.5 pr-7 pl-4 w-full leading-none whitespace-nowrap bg-white rounded border border-gray-300 border-solid min-h-[36px] text-zinc-600 max-md:pr-5"
            required={required}
            value={value}
            onChange={handleChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            className="flex w-full bg-gray-100 rounded-md border border-solid border-zinc-300 min-h-[75px] max-md:max-w-full"
            required={required}
            value={value}
            onChange={handleChange}
          />
        );
      case 'file':
        return (
          <div className="flex relative flex-col py-px pr-28 pl-px w-full bg-gray-100 rounded-md border border-solid border-zinc-300 max-md:pr-5">
            <input
              type="file"
              id={id}
              name={name}
              className="sr-only"
              aria-label={label}
              onChange={handleChange}
            />
            <label
              htmlFor={id}
              className="overflow-hidden p-2.5 w-full text-base rounded-md min-h-[42px] text-neutral-600 cursor-pointer"
            >
              {value ? value.name : 'Select your file'}
            </label>
            <button
              type="button"
              onClick={() => document.getElementById(id).click()}
              className="flex absolute inset-y-px right-px z-0 flex-col items-center py-2.5 pr-5 pl-5 text-base rounded-none bg-zinc-400 min-h-[42px] w-[95px] text-white"
            >
              Browse
            </button>
          </div>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            className="flex w-full bg-gray-100 rounded-md border border-solid border-zinc-300 min-h-[40px]"
            required={required}
            value={value}
            onChange={handleChange}
            readOnly={type === 'date'}
          />
        );
    }
  };

  return (
    <div className="flex flex-col grow shrink justify-center">
      <div className="flex flex-col px-2.5 w-full max-w-[328px] min-h-[71px]">
        <div className="flex flex-col pb-px w-full">
          <label htmlFor={id} className="pb-1.5 w-full text-base text-neutral-500">
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          {renderInput()}
        </div>
      </div>
    </div>
  );
};

export default FormField;