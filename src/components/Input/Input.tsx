import "./styles";
import { Label, InputEl, InputContainer } from "./styles";
import type { InputProps } from "./types";

function Input({
  id,
  type,
  placeholder,
  label,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputEl
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
