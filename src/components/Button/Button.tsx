import "./styles";
import { ButtonStyled } from "./styles";
import type { ButtonProps } from "./types.ts";

function Button({
  type = "button",
  onClick,
  label,
  disabled = false,
  isDanger,
}: ButtonProps) {
  return (
    <ButtonStyled
      className="button"
      onClick={onClick}
      type={type}
      disabled={disabled}
      isDanger={isDanger}
    >
      {label}
    </ButtonStyled>
  );
}

export default Button;
