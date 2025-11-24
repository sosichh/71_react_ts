import type { ChangeEvent } from "react";

export interface InputProps {
  id?: string;
  type?: "password" | "email" | "tel" | "number" | "text";
  placeholder?: string;
  label?: string;
  name: string;
  value?:string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
