import Image from "next/image";
import React from "react";
import Link from "next/link";

const images = [
  { src: "/assets/projects/directed.jpg", alt: "Directed project image" },
  { src: "/assets/projects/photos/2.jpg", alt: "Photo 2" },
  { src: "/assets/projects/more.jpg", alt: "More projects image" },
  {
    src: "/assets/projects/collaborated.jpg",
    alt: "Collaborated project image",
  },
  { src: "/assets/projects/photos/5.jpg", alt: "Photo 5" },
  { src: "/assets/projects/photos/6.jpg", alt: "Photo 6" },
  { src: "/assets/projects/photos/7.jpg", alt: "Photo 7" },
  { src: "/assets/projects/photos/8.jpg", alt: "Photo 8" },
  { src: "/assets/projects/photos/9.jpg", alt: "Photo 9" },
  { src: "/assets/projects/photos/10.jpg", alt: "Photo 10" },
  { src: "/assets/projects/photographed.jpg", alt: "Photographed project" },
  { src: "/assets/projects/photos/12.jpg", alt: "Photo 12" },
  { src: "/assets/projects/photos/13.jpg", alt: "Photo 13" },
  { src: "/assets/projects/photos/14.jpg", alt: "Photo 14" },
  { src: "/assets/projects/photos/15.jpg", alt: "Photo 15" },
  { src: "/assets/projects/photos/16.jpg", alt: "Photo 16" },
];

const ImageGrid = ({ startIndex, endIndex }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {images.slice(startIndex, endIndex).map((img, index) => (
      <div key={index}>
        <Image
          src={img.src}
          alt={img.alt}
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
    ))}
  </div>
);

const Netflix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src="/assets/projects/photographed.jpg"
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Photographed</h2>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
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
          <ImageGrid startIndex={0} endIndex={10} />
        </div>

        <div className="col-span-4">
          <h2 className="text-2xl font-bold mb-8 mt-8">
            Corporate Photography
          </h2>
          <ImageGrid startIndex={10} endIndex={16} />
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

export default Netflix;
