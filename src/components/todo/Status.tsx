import type { ReactNode } from "react";

const colorStyles = {
  green: "bg-green-500",
  blue: "bg-blue-500 ml-5",
};

interface StatusProps {
  children: ReactNode;
  color: keyof typeof colorStyles;
}

function Status({ children, color }: StatusProps) {
  const baseStyles =
    "flex min-h-7 min-w-20 items-center justify-center rounded-full px-4 py-1 text-sm font-medium text-white shadow-md";

  return (
    <div className={`${baseStyles} ${colorStyles[color]}`}>{children}</div>
  );
}

export default Status;
