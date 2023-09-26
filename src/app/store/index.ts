import { configureStore } from "@reduxjs/toolkit";
import globalSlices from "./globalSlices";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    globalStates: globalSlices,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
