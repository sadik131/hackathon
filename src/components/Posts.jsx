import React, { useState } from 'react';
import Modal from './Modal';
import { FaArrowRight } from 'react-icons/fa';

function Posts({ law }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLaw, setSelectedLaw] = useState(null);
  console.log(selectedLaw)

  const openModal = (law) => {
    setSelectedLaw(law);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div
        className="group relative w-full mt-10 rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:rotate-3 cursor-pointer"
        onClick={() => openModal(law)}
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-2xl -z-10 transform group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>

        <div className="w-full shadow-lg rounded-2xl bg-white">
          <img src={law.img} className="w-full h-48 rounded-t-2xl object-cover" alt={law?.title} />
          <div className="mt-10 px-5">
            <h3 className="text-2xl text-gray-800 font-bold mb-5">{law?.title}</h3>
            <p className="text-gray-600">{law?.description.slice(0, 50)}...</p>
            <button className="text-red-400 mt-4 pb-4 flex items-center justify-center gap-3">Read more <FaArrowRight className='text-red-500' />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && <Modal law={selectedLaw} close={closeModal} />}
    </div>
  )
}

export default Posts;
