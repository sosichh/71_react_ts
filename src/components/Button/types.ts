export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  isDanger?: boolean;
}
