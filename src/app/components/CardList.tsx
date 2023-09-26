"use client";
import { useSelector } from "react-redux";
import { Result, RootState } from "../utils/types";
import Card from "./Card";
import { paginate } from "../utils/paginate";
import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { setCurrentPage } from "../store/globalSlices";

const CardList = () => {
  const { list, currentPage, pageSize } = useSelector(
    (state: RootState) => state.globalStates
  );

  const dispatch = useAppDispatch();
  const handleScroll = () => {
    console.log("go", window.scrollY);
    dispatch(setCurrentPage(2));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const articlesPages: Result[] = paginate(list, currentPage, pageSize);

  return (
    <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-[50px]">
      {list !== null &&
        articlesPages.map((elem, index) => (
          <section key={index} title={`section-${index}`}>
            <Card article={elem} />
          </section>
        ))}
    </div>
  );
};

export default CardList;
