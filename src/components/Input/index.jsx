import { ContainerInput, ContainerInputError } from "./styled";

export function Input({ onChange, type, placeholder, value, ...rest }) {
  return (
    <ContainerInput
      value={value}
      {...rest}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}

export function InputError({ onChange, type, placeholder, value }) {
  return (
    <ContainerInputError
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}
