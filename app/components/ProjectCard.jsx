import React from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ title, description, date, gitUrl }) => {
  return (
    <div className="relative border border-gray-300 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 group">
    
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#f3f4f6] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#2b2b2b] hover:border-white group/link"
        >
        <LinkIcon className="h-10 w-10 text-[#2b2b2b] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
        </Link>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">{date}</p> {/* Date */}
        <h5 className="text-2xl font-bold mb-2 text-gray-800">{title}</h5> {/* Title */}
        <p className="text-gray-600">{description}</p> {/* Description */}
      </div>

    </div>
  );
};

export default ProjectCard;


// import React from 'react'
// import { LinkIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// const ProjectCard = ({ imgUrl, title, description, gitUrl}) => {
//   return (
//     <div>
//         <div 
//             className="h-52 md:h-72 rounded-t-xl relative group"
//             style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
//         >
//             <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#f3f4f6] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
//                 <Link
//                     href={gitUrl}
//                     className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#2b2b2b] hover:border-white group/link"
//                 >
//                     <LinkIcon className="h-10 w-10 text-[#2b2b2b] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
//                 </Link>
//             </div>
//         </div>
//         <div className="text-black rounded-b-xl mt-3 bg-[#f3f4f6] py-6 px-4">
//             <h5 className="text-xl font-semibold mb-2">{title}</h5>
//             <p className="text-[#121212]">{description}</p>
//         </div>
//     </div>
//   )
// }

// export default ProjectCard