import React from "react";
import { sortNewest } from "../constants/constants";
import { Result, RootState } from "../utils/types";
import { useAppDispatch } from "../store";
import { setError, setList, setNewest } from "../store/globalSlices";
import { useSelector } from "react-redux";

const SearchNewest = ({ onShowModal }) => {
  const { list } = useSelector((state: RootState) => state.globalStates);
  const dispatch = useAppDispatch();
  const dateNow = new Date();
  const nowDateMillisec = dateNow.getTime();
  const dateHours = nowDateMillisec - 3600000;
  const dateYesterday = nowDateMillisec - 86400000;
  const dateWeek = nowDateMillisec - 604800016.56;
  const dateMonth = nowDateMillisec - 2629800000;

  const handleClick = (id: string, name: string) => {
    let clock;
    const newlist = list.filter((elem: Result) => {
      if (id === "1") {
        clock = Date.parse(elem.webPublicationDate.toString()) - dateHours;
        console.log("timer", clock);
        return clock < 3600000 && elem;
      }
      if (id === "1") {
        clock = Date.parse(elem.webPublicationDate.toString()) - dateYesterday;
        console.log("timer", clock);
        return clock < 3600000 && elem;
      }
      if (id === "1") {
        clock = Date.parse(elem.webPublicationDate.toString()) - dateWeek;
        console.log("timer", clock);
        return clock < 3600000 && elem;
      }
      if (id === "1") {
        clock = Date.parse(elem.webPublicationDate.toString()) - dateMonth;
        console.log("timer", clock);
        return clock < 3600000 && elem;
      }
    });
    console.log(name);
    dispatch(setNewest(name));
    if (newlist.length > 0) {
      dispatch(setList(newlist));
    } else {
      dispatch(setError("Not found news"));
      onShowModal();
    }
  };

  return (
    <div
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <div className="py-1" role="none">
        {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
        {sortNewest.map((elem) => (
          <div
            key={elem.id}
            className={`text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200`}
            onClick={() => handleClick(elem.id, elem.name)}
          >
            {elem.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchNewest;
