import _ from "lodash";
import { Result } from "./types";

export function paginate(
  items: Result[],
  pageNumber: number,
  pageSize: number
) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
}
