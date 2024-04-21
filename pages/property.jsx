import Image from "next/image";
import React from "react";
import directedImg from "../public/assets/projects/directed.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
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
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            These are the projects under my direction to date, categorized into
            personal and corporate initiatives.
          </p>
        </div>

        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-8">Personal Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/utrNuHv0uwM"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/utrNuHv0uwM?si=THRE8D2gEFNTmuj8"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-full px-8 py-2 botonyt">
                  VIEW on YOUTUBE
                </button>
              </a>
            </div>
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ehoz1rZY18I"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/ehoz1rZY18I?si=lZP_Gr6XctybIB9Y"
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

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/94jucFujnI8"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/94jucFujnI8?si=lKdZffmKDv6LidJj"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-full px-8 py-2 botonyt">
                  VIEW on YOUTUBE
                </button>
              </a>
            </div>
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8f7bSXvEmp4"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/8f7bSXvEmp4?si=60iYmD8lBY_ctqM4"
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

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TJmKu6Dgmgk"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/TJmKu6Dgmgk?si=sDNIJ_NhdQDaWuB7"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-full px-8 py-2 botonyt">
                  VIEW on YOUTUBE
                </button>
              </a>
            </div>
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/sbjqqWfpksE"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/sbjqqWfpksE?si=8NStBy7X0rpdAryz"
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

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fgRFf6Ge_C0"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/fgRFf6Ge_C0?si=MKXc1cCgCYJezN96"
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

        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-8">Coporate Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/-KvBA7gf2o8"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/-KvBA7gf2o8?si=EFjGcLIwnYgjv5cf"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-full px-8 py-2 botonyt">
                  VIEW on YOUTUBE
                </button>
              </a>
            </div>
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/BesR7uavQZk"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/BesR7uavQZk?si=k3GUar0q_oe4BRxn"
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

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/wWvxYLtWcMI"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/wWvxYLtWcMI?si=ArUAlkosPIMffa57"
                target="_blank"
                rel="noreferrer"
              >
                <button className="w-full px-8 py-2 botonyt">
                  VIEW on YOUTUBE
                </button>
              </a>
            </div>
            <div class="video-margin">
              <div className="video-container mb-4">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TBTmeGgwVmY"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
              <a
                href="https://youtu.be/TBTmeGgwVmY?si=-7GQ8SP7FqwB-iRU"
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

export default property;
