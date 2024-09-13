import React from 'react'

const categories = [
    { name: "Road Safety Laws", path: "/road-safety" },
    { name: "Divorce Laws", path: "/divorce" },
    { name: "Criminal Law", path: "/criminal" },
    { name: "Rape and Sexual Assault Laws", path: "/rape-assault" },
    { name: "Consumer Protection Laws", path: "/consumer" },
    { name: "Cybercrime Laws", path: "/cybercrime" },
    { name: "Labor and Employment Laws", path: "/labor" },
    { name: "Property Laws", path: "/property" },
    { name: "Environmental Laws", path: "/environmental" },
    { name: "Child Protection Laws", path: "/child-protection" },
  ];

function LowCatagory() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="w-full max-w-full overflow-x-auto custom-scrollbar">
        <div className="flex space-x-4 px-4 py-2">
          {categories.map((category, index) => (
            <a 
              href={category.path}
              key={index}
              className="flex-shrink-0 text-gray-800 text-center py-1 px-2 transition duration-300"
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LowCatagory