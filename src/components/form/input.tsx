import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../ui/input";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";
import { FocusEvent } from "react";

type InputProps<TFieldValues extends FieldValues> = {
  register: UseFormRegister<TFieldValues>;
  name: Path<TFieldValues>;
  type: "password" | "email" | "text";
  label: string;
  error: string | undefined;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  availabilityStatus?: string;
  placeholder?: string;
};
const input = <TFieldValues extends FieldValues>({
  register,
  name,
  type,
  label,
  error,
  placeholder,
}: InputProps<TFieldValues>) => {
  return (
    <>
      <div className="cursor-pointer w-full">
        <Label className="mb-1 ml-1">{label}</Label>
        <Input
          type={type}
          className={`${
            error && "ring-red-500 ring-1"
          } bg-gray-50 dark:bg-main-hover-bg-dark`}
          {...register(name)}
          placeholder={placeholder ? placeholder : ""}
        />
        <span className="text-xs text-red-500 ">{error}</span>
      </div>
    </>
  );
};

export default input;
