'use client'
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function LoadMore() {
  const {ref, inView} = useInView();
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
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
