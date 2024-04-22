import Image from "next/image";
import React from "react";
import collaboratedImg from "../public/assets/projects/collaborated.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={collaboratedImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Collaborated</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4 space-y-8">
          <p>
            I've had the privilege of working on a variety of captivating
            audiovisual projects, spanning commercials, short films, and other
            cinematic endeavors. Here are a few highlights:
          </p>
        </div>

        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-8">Corporate Projects</h2>
          <h3 className="mb-2">Commercial for Huevo San Juan</h3>
          <h3 className="mb-2">Position: PA trainee</h3>
          <p className="mb-4">Production company: Cobra Films</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/PR4SMILaWqA"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/PR4SMILaWqA?si=rhnAIJ6XEIsESs44"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-full px-8 py-2 botonyt">
                  VIEW on YOUTUBE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default crypto;
