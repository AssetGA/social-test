import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { globalActions } from "./actions/globalActions";
import { Response } from "../utils/types";
import { globalStates } from "./states/globalStates";

export const fetchResults = createAsyncThunk<
  Response,
  undefined,
  { rejectValue: string }
>("search/fetchResults", async function (_, { rejectWithValue }) {
  const response = await fetch(
    "https://content.guardianapis.com/search?api-key=7f5c8722-e97c-49f4-b414-0dd02922ecec"
  );
  if (!response.ok) {
    return rejectWithValue("Server Error");
  }

  const data = await response.json();
  return data.response;
});

export const globalSlices = createSlice({
  name: "global",
  initialState: globalStates,
  reducers: globalActions,
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.response = action.payload;
        state.list = action.payload.results;
        state.startIndex = action.payload.startIndex;
        state.total = action.payload.total;
        // state.pageSize = action.payload.pageSize;
        state.currentPage = action.payload.currentPage;
        state.pages = action.payload.pages;
        state.loading = false;
      });
  },
});

export const {
  setList,
  setError,
  setNewest,
  setCurrentPage,
  setPageSize,
  setCountNumber,
} = globalSlices.actions;

// export const globalActions = globalSlices.actions;
export default globalSlices.reducer;
