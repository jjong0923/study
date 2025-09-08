import type React from "react";

interface InputProps {
  type: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder: string;
  isIn: boolean;
  isBlur: boolean;
}

function Input({
  type,
  label,
  onChange,
  onBlur,
  placeholder,
  isIn,
  isBlur,
}: InputProps) {
  return (
    <>
      <input
        className="mt-4 rounded-lg border border-gray-300 p-2 hover:ring-2 hover:ring-blue-400 hover:outline-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <p
        className={`mt-1 text-xs text-red-400 ${isIn && isBlur ? "visible" : "invisible"}`}
      >
        {label}를 입력해주세요.
      </p>
    </>
  );
}

export default Input;
