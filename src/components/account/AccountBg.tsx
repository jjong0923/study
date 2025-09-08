import type { ReactNode } from "react";

interface AccountBgProps {
  children: ReactNode;
}

function AccountBg({ children }: AccountBgProps) {
  return (
    <div className="flex h-lvh flex-col items-center justify-start bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 pt-30">
      {children}
    </div>
  );
}

export default AccountBg;
