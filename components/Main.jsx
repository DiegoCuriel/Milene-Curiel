import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaYoutube, FaFilm } from "react-icons/fa";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

const Modal = ({ isOpen, onClose, email }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg">Contact Email</h2>
        <p>{email}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            LET'S CREATE SOMETHING TOGETHER
            <span className="text-lg">!</span>
          </p>
          <h1 className="py-4 text-gray-700 amatic-font">
            <span>Milene Curiel</span>
          </h1>
          <p className="py-4 text-gray-600 m-auto courierp">
            Aspiring film director.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.instagram.com/milene.art?igsh=MXB4YjdmN2ZiN3RsbA=="
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaInstagram />
              </div>
            </a>
            <a
              href="https://www.youtube.com/@milenecuriel6923"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaYoutube />
              </div>
            </a>
            <div
              onClick={handleOpenModal}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 py-12">
        <Link href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleDown className="text-[text-black]" size={25} />
            </div>
          </a>
        </Link>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        email="milene.curiel@gmail.com"
      />
    </div>
  );
};

export default Main;
