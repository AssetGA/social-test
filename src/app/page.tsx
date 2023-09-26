"use client";
import Form from "./components/Form";
import CardList from "./components/CardList";
import { useEffect } from "react";
import { fetchResults } from "./store/globalSlices";
import { useAppDispatch } from "./store";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResults());
  }, [dispatch]);

  return (
    <main className="container mx-auto pt-[100px]">
      <div className="flex flex-col items-center justify-between ">
        <div className="flex">
          <Form />
        </div>
      </div>

      <CardList />
    </main>
  );
}
