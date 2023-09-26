"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import search from "../../../public/search.svg";
import { useSelector } from "react-redux";
import { Result, RootState } from "../utils/types";
import { useAppDispatch } from "../store";
import { fetchResults, setList, setNewest } from "../store/globalSlices";
import SearchNewest from "./SearchNewest";
import CountArticle from "./CountArticle";
import Modal from "./Modal";

const Form = () => {
  const dispatch = useAppDispatch();
  const { list, error, newest, countNumber } = useSelector(
    (state: RootState) => state.globalStates
  );
  const [active, setActive] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [text, setText] = useState({});
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setNewest("Sort by newest"));
    const { name, value } = e.target;
    setText((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch, text]);

  function searchKeyword(text: string, keyword: string) {
    const words = text.split(" ");
    const matchingWords = words.filter((word) =>
      word.toLowerCase().includes(keyword.toLowerCase())
    );
    return matchingWords;
  }

  const findText = (e: any) => {
    e.preventDefault();

    let search: string = text?.search;
    const newText: Result[] = list.filter((elem) => {
      if (typeof search === "string") {
        const word = searchKeyword(elem.webTitle, search);
        return word.length > 0 && elem;
      }
      return;
    });

    if (newText.length !== 0) {
      dispatch(setList(newText));
    } else {
      setText({});
    }
  };

  const onShowModal = () => {
    if (showModal === false) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  const handleShown = () => {
    setIsShow(false);
    dispatch(setNewest("Sort by newest"));
  };

  return (
    <div className="w-full bg-slate-500 rounded-md">
      <div className="flex flex-wrap pt-[25px] px-[25px] ">
        <div className="flex flex-raw gap-3">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Image priority src={search} alt="search" className="w-5 h-5" />
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Поиск"
              type="text"
              name="search"
              onChange={handleChange}
            />
          </label>
          <button
            type="button"
            className="rounded-md bg-white w-[100px] hover:bg-slate-200"
            onClick={findText}
          >
            Find
          </button>
        </div>
      </div>
      <div className="gap-4">
        <div
          className="relative inline-block text-left pb-[25px] px-[25px]"
          onMouseLeave={() => setActive(false)}
        >
          <div className="w-[150px]">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {newest}
              <svg
                className="-mr-3 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {active ? (
            <SearchNewest list={list} onShowModal={onShowModal} />
          ) : (
            <div></div>
          )}
        </div>
        <div
          className="relative inline-block text-left"
          onMouseLeave={() => handleShown()}
        >
          <label className="text-white text-sm">Items on page</label>
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-white py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 gap-10"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
              onMouseEnter={() => setIsShow(true)}
            >
              <span className="-ml-5"> {countNumber}</span>

              <svg
                className="-mr-10 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <Modal
            showModal={showModal}
            onShowModal={onShowModal}
            error={error}
          />

          {isShow ? <CountArticle /> : <div></div>}
        </div>
      </div>
    </div>
  );
};

export default Form;
