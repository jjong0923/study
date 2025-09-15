import type React from "react";

interface InputProps {
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  placeholder: string;
  isEmpty: boolean;
  isBlur: boolean;
}

function AccountInput({
  type,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  isEmpty,
  isBlur,
}: InputProps) {
  return (
    <>
      <input
        className="mt-4 rounded-lg border border-gray-300 p-2 hover:ring-2 hover:ring-blue-400 hover:outline-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <p
        className={`mt-1 text-xs text-red-400 ${isEmpty && isBlur ? "visible" : "invisible"}`}
      >
        {label}를 입력해주세요.
      </p>
    </>
  );
}

export default AccountInput;
