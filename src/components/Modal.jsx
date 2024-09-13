import React from 'react';
import Img from '../img/low.jpg';

function Modal({ low, close }) {
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative bg-white rounded-lg p-8 shadow-lg z-10 w-1/2 h-screen overflow-y-auto">
                    <img src={Img} className="rounded-2xl" alt="" />

                    <button
                        onClick={close}
                        className="absolute text-2xl top-2 right-2 text-gray-600 hover:text-gray-800"
                    >
                        &times;
                    </button>
                    <h2 className="text-2xl font-bold mb-4">{low?.title}</h2>
                    <p className="text-gray-700">{low?.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Modal;
