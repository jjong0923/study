import type { ReactNode } from "react";

interface AccountFormProps {
  children: ReactNode;
}

function AccountForm({ children }: AccountFormProps) {
  return (
    <form className="flex w-[50vh] flex-col rounded-xl bg-white p-8 shadow-lg">
      {children}
    </form>
  );
}

export default AccountForm;
