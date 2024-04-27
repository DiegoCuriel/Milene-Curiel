import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[text-black] mb-4">
          Refferals
        </p>

        <p>
          Curious about what previous collaborators have to say about working
          with me? Take a look at some testimonials from previous clients,
          colleagues, and partners.
        </p>

        <div className="flex flex-col items-end mt-12 py-12 px-4 max-w-2xl mx-auto">
          <div className="text-right w-full">
            <p className="text-lg mb-2 text-justify italic">
              &quot;Milene is a great team player. She’s a go-getter and has
              always the best disposition to keep learning and keep the set
              moving. Always asking what else she can help with. There’s a
              brilliant future ahead of her.&quot;
            </p>

            <p className="font-semibold">Mauricio Coronado</p>
            <p className="text-sm">1st AD</p>
          </div>
        </div>

        <div className="flex flex-col items-end px-4 max-w-2xl mx-auto">
          <div className="text-right w-full">
            <p className="text-lg mb-2 text-justify italic">
              &quot;I have been working with Milene in a few projects and her
              job is Amazing. She really has an increíble talent with the
              camera, Im really exited to see what’s comming for her in the
              future.&quot;
            </p>
            <p className="font-semibold">Wilson Peregrina</p>
            <p className="text-sm">MMA coach & Samurai FC founder</p>
          </div>
        </div>

        <div className="flex flex-col items-end mt-12 px-4 max-w-2xl mx-auto">
          <div className="text-right w-full">
            <p className="text-lg mb-2 text-justify italic">
              &quot;Milene logró capturar con habilidad el proceso detrás de
              bambalinas en nuestros eventos corporativos, transmitiendo
              fielmente la esencia de cada momento.&quot;
            </p>
            <p className="font-semibold">Tell Eventos</p>
            <p className="text-sm">Corporate event planners</p>
          </div>
        </div>

        <div className="flex justify-center py-12 mt-24">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[text-black]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
