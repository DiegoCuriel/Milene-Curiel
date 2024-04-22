import Image from "next/image";
import React from "react";
import photographedImg from "../public/assets/projects/photographed.jpg";
import Link from "next/link";

import OneImg from "../public/assets/projects/directed.jpg";
import TwoImg from "../public/assets/projects/photos/2.jpg";
import ThreeImg from "../public/assets/projects/more.jpg";
import FourImg from "../public/assets/projects/collaborated.jpg";
import FiveImg from "../public/assets/projects/photos/5.jpg";
import SixImg from "../public/assets/projects/photos/6.jpg";
import SevenImg from "../public/assets/projects/photos/7.jpg";
import EiImg from "../public/assets/projects/photos/8.jpg";
import NineImg from "../public/assets/projects/photos/9.jpg";
import TenImg from "../public/assets/projects/photos/10.jpg";

import EleImg from "../public/assets/projects/photographed.jpg";
import TweImg from "../public/assets/projects/photos/12.jpg";
import ThiImg from "../public/assets/projects/photos/13.jpg";
import FourtImg from "../public/assets/projects/photos/14.jpg";
import FivetImg from "../public/assets/projects/photos/15.jpg";
import SixtImg from "../public/assets/projects/photos/16.jpg";

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={photographedImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Photographed</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <h2>Overview</h2>
          <p>
            Over the years, my photography has been a journey of growth and
            learning, reflecting my deepening passion for visual storytelling.
            Inspired by the captivating power of a camera, I continue to explore
            and share the beauty of the world through my lens. With a portfolio
            spanning both corporate and personal photography, each image tells a
            unique story.
          </p>
        </div>

        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-8">Personal Photography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={OneImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={TwoImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={ThreeImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={FourImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={FiveImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={SixImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={SevenImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={EiImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={NineImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={TenImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-8 mt-8">Corporate Photography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={EleImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={TweImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={ThiImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={FourtImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={FivetImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
            <div>
              <Image
                src={SixtImg}
                alt="Directed project image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default netflix;
