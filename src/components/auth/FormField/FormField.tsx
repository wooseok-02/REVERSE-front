import type { ReactNode } from "react";
import * as S from "./FormField.styles";

type FormFieldProps = {
  label: string;
  htmlFor?: string;
  children: ReactNode;
};

export default function FormField({
  label,
  htmlFor,
  children,
}: FormFieldProps) {
  return (
    <S.Field>
      <S.Label htmlFor={htmlFor}>{label}</S.Label>
      {children}
    </S.Field>
  );
}
