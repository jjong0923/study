import { create } from "zustand"; // npm i zustand
import { persist } from "zustand/middleware"; // 로컬 스토리지 저장

interface Account {
  account: string | null;
  setAccount: (account: string | null) => void;
}

// const useAccountStore = create<Account>((set) => ({
//   account: null,
//   setAccount: (account) => set({ account }),
// }));
const useAccountStore = create<Account>()(
  persist<Account>(
    (set) => ({
      account: null,
      setAccount: (account) => set({ account }),
    }),
    {
      name: "account-storage",
    },
  ),
);

export default useAccountStore;
