import React from 'react';
import { motion } from 'framer-motion'; 
import blog1 from "../img/artical1.jpg";
import blog2 from "../img/artical2.png";
import blog3 from "../img/artical3.png";
import { Link } from 'react-router-dom';
import blog4 from "../img/artical1.jpg";

function Artical() {

    const cardVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.2 }
        })
    };

    return (
        <div className='bg-gray-300'>
            <div className='flex items-center bg-white'>
                <div className='bg-slate-800 py-3 px-4 flex gap-2 w-[80%]'>
                    <Link className="text-white" to={"/"}>Home</Link>
                    <span className='text-white'>/</span>
                    <Link className="text-gray-400" to={"/artical"}>Artical</Link>
                </div>
                <select className="block px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 w-[20%] focus:ring-indigo-500 focus:border-indigo-500">
                    <option>Select options</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                    <option>Option 5</option>
                </select>
                <h1 className='text-xl text-red-700'></h1>
            </div>

            <div className='grid grid-cols-4 gap-4 py-6 px-3'>
                {[blog2, blog3, blog4, blog1].map((image, index) => (
                    <motion.div
                        key={index}
                        className="article-card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                    >
                        <img src={image} className='hover:scale-105 transform w-full h-36 rounded-md' alt={`Article ${index}`} />
                        <p className='px-2 mt-2 text-base text-white bg-slate-600'>
                            {index === 0 ? "Delhi High Court Grants Interim Bail to Coaching Centre Co-Owners; Orders ₹5 Crore Deposit and Committee Formation"
                                : index === 1 ? "Gemini Data Sues Google for Trademark Infringement Over AI System Name"
                                : index === 2 ? "Supreme Court again compares CBI to 'Caged Parrot' asks Agency to Dispel Notion"
                                : "Shardul Amarchand Mangaldas & Co. advises Norwest Capital, LLC on its investment in Edme Services Private Limited"}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Artical;
