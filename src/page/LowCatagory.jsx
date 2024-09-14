import React, { useState, useRef } from 'react';
import { FaHome } from "react-icons/fa";
import { GiTigerHead } from "react-icons/gi";
import { FaRegNewspaper } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { Link } from 'react-router-dom';

const categories = [
  { name: "Bare Acts", path: "/bar-acts", icon: GiTigerHead },
  { name: "Latest News", path: "/latest-news", icon: FaRegNewspaper, subContent: ["Breaking News", "World", "Politics"] },
  { name: "Criminal Law", path: "/criminal-law", icon: GoLaw, subContent: ["Rape case law", "Murder case", "sexual assault law"] },
  { name: "Articles", path: "/articles" },
  { name: "Latest Caselaw", path: "/latest-caselaw", subContent: ["Dehli high court", "punjab high court", "patna high court"] },
  { name: "Library", path: "/library", subContent: ["Book 1", "Book 2", "Book 3"] },
  { name: "Judiciary", path: "/judiciary", subContent: ["Supreme court of india", "high court of india", "judicial service exam"] },
  { name: "Guest Post", path: "/guest-post" },
];

function LowCatagory() {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const containerRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredCategory(index);
  };

  const handleMouseLeave = (index, e) => {
    const container = containerRefs.current[index];

    if (container instanceof Node && e.relatedTarget instanceof Node && container.contains(e.relatedTarget)) {
      return;
    }

    setHoveredCategory(null);
  };


  return (
    <div className="flex flex-col bg-[#2000d7]">
      <div className="w-full max-w-full custom-scrollbar relative">
        <div className="flex space-x-4 px-4 py-2">
          <Link to="/"><FaHome className='text-2xl text-white' /></Link>
          {categories.map((category, index) => (
            <div
              key={index}
              ref={el => containerRefs.current[index] = el}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={(e) => handleMouseLeave(index, e)}
            >
              <a
                href={category.path}
                className="flex-shrink-0 text-white text-center py-1 px-2 transition duration-300"
              >
                {category.icon && React.createElement(category.icon, { className: 'inline-block mr-2 text-xl' })}
                {category.name}
              </a>
              {hoveredCategory === index && category.subContent && (
                <div className="absolute left-0 top-4 mt-2 w-48 bg-white text-black rounded shadow-lg p-2 z-10">
                  <ul>
                    {category.subContent.map((item, idx) => (
                      <li key={idx} className="py-1 px-2 hover:bg-gray-200">
                        <Link to={`${category.path}/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LowCatagory;
