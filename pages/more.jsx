import Image from "next/image";
import React from "react";
import moreImg from "../public/assets/projects/more.jpg";
import Link from "next/link";

const More = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={moreImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">& more...</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="font-bold text-2xl">Coming soon ...</p>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <Link href="/#projects">
          <a className="text-lg bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
            Back to Projects
          </a>
        </Link>
      </div>
    </div>
  );
};

export default More;
