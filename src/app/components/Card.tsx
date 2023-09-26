import Link from "next/link";
import React from "react";
import Image from "next/image";
import arrow from "../../../public/arrow.png";
import { Result } from "../utils/types";

const Card = ({ article }: Result) => {
  return (
    <div className="relative w-full h-full rounded-[15px] bg-[#ececf0] my-2">
      <img
        src="https://proweb63.ru/assets/chema/images/blog/blog_css_zoom_26092020.png"
        alt="about"
        className="w-full h-[200px] object-cover rounded-t-[15px]"
      />
      <div className="static flex flex-col p-4 bg-[#ececf0] rounded-b-[15px]">
        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">
          {article.webPublicationDate}
        </p>
        <h3 className="font-epilogue font-semibold text-[16px] text-left leading-[26px]  mb-[20px]">
          {article.webTitle}
        </h3>
        <p className="absolute bottom-2 right-2 hover:bg-red-100 py-1 px-4 rounded-lg">
          <Link
            href={{
              pathname: `/pages/news/`,
              query: { slug: article.id },
            }}
            className="flex flex-row items-center gap-2"
          >
            Details
            <Image src={arrow} alt="arrow" className=" w-2 h-2"></Image>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
