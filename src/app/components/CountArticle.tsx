"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import { sortPages } from "../constants/constants";
import { setCountNumber, setPageSize } from "../store/globalSlices";
import { useAppDispatch } from "../store";

const CountArticle = () => {
  const dispatch = useAppDispatch();
  const { list, total, startIndex, currentPage, pageSize, pages } = useSelector(
    (state: RootState) => state.globalStates
  );

  console.log("list", currentPage);

  const handlePageChange = (startIndex: number) => {
    dispatch(setCountNumber(startIndex));
    dispatch(setPageSize(startIndex));
  };

  return (
    <div
      className="absolute left-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none -translate-y-2"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="py-1" role="none">
        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
        {sortPages.map((elem, index) => (
          <div
            key={elem.id}
            className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-200"
            onClick={() => handlePageChange(elem.num)}
          >
            {elem.num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountArticle;
