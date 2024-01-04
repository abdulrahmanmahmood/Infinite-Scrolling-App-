"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (inView) {
      fetchAnime(2).then((res) => {
        setData([...data]);
      });
    }
  }, [inView]);

  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
