import { ResultState } from "../../utils/types";
import { PayloadAction } from "@reduxjs/toolkit";

export const globalActions = {
  setList: (state: ResultState, action: PayloadAction<[]>) => {
    state.list = action.payload;
  },
  setError: (state: ResultState, action: PayloadAction<string>) => {
    state.error = action.payload;
  },
  setNewest: (state: ResultState, action: PayloadAction<string>) => {
    state.newest = action.payload;
  },
  setCurrentPage: (state: ResultState, action: PayloadAction<number>) => {
    state.currentPage = action.payload;
  },
  setPageSize: (state: ResultState, action: PayloadAction<number>) => {
    state.pageSize = action.payload;
  },
  setCountNumber: (state: ResultState, action: PayloadAction<number>) => {
    state.countNumber = action.payload;
  },
};
