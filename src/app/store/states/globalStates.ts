import { ResultState } from "../../utils/types";

export const globalStates: ResultState = {
  response: null,
  list: [],
  loading: false,
  error: null,
  total: 0,
  startIndex: 0,
  pageSize: 3,
  currentPage: 0,
  pages: 0,
  newest: "Sort by newest",
  countNumber: 0,
};
