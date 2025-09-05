import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface userState {
  account: string | null;
}

const initialState: userState = {
  account: null,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<string>) => {
      state.account = action.payload;
    },
  },
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;
