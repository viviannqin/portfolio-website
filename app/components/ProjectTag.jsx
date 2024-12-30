import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-black"
    : "text-slate-300 border-slate-300 hover:border-black";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-1 text-sm cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
