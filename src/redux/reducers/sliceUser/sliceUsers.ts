import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

//type UserModelNull = UserModel | null;

const sliceUser = createSlice({
  name: "session",
  initialState: {
    loading: false,
    user: null as any,
  },
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});
export const userActions = sliceUser.actions;
export const userSelector = (state: RootState) => state.sliceUser;
export default sliceUser;
