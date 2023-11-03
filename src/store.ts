import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import SneakersSlice from "./Features/SneakersPage/SneakersSlice";

const store = configureStore({
  reducer: {
    sneakers: SneakersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
