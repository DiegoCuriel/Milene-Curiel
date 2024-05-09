import Image from "next/image";
import React from "react";
import directedImg from "../public/assets/projects/directed.jpg";
import Link from "next/link";

const Directed = () => {
  const videos = [
    { src: "ehoz1rZY18I", label: "VIEW on YOUTUBE" },
    { src: "94jucFujnI8", label: "VIEW on YOUTUBE" },
    { src: "8f7bSXvEmp4", label: "VIEW on YOUTUBE" },
    { src: "utrNuHv0uwM", label: "VIEW on YOUTUBE" },
    { src: "TJmKu6Dgmgk", label: "VIEW on YOUTUBE" },
    { src: "vCdPCqtAbg4", label: "VIEW on YOUTUBE" },
    { src: "kafGjCk2eE4", label: "VIEW on YOUTUBE" },
    { src: "sbjqqWfpksE", label: "VIEW on YOUTUBE" },
    { src: "-KvBA7gf2o8", label: "VIEW on YOUTUBE", isCorporate: true },
    { src: "BesR7uavQZk", label: "VIEW on YOUTUBE" },
    { src: "wWvxYLtWcMI", label: "VIEW on YOUTUBE" },
    { src: "TBTmeGgwVmY", label: "VIEW on YOUTUBE" },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={directedImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Directed</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 space-y-8">
          <p>
            While the common denominator on this section is directing, I&apos;ve also
            contributed to these projects in diverse roles such as writing,
            filming, editing, producing, acting, and more. Each project
            represents a unique blend of creative endeavors and collaborative
            efforts. Showcasing both the personal and corporate aspects of my
            work.
          </p>
        </div>

        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-8 mt-2">Personal Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {videos.map((video, index) => (
              <>
                {video.isCorporate && (
                  <h2 className="col-span-full text-2xl font-bold mb-2 mt-12">
                    Corporate Projects
                  </h2>
                )}
                <div key={index} className="video-margin col-span-1">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.src}`}
                      title="YouTube video player"
                      allowFullScreen
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <a
                    href={`https://youtu.be/${video.src}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="w-full px-8 py-2 botonyt">
                      {video.label}
                    </button>
                  </a>
                </div>
              </>
            ))}
          </div>
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

export default Directed;
