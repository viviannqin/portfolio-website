import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black border-black bg-black/10"
    : "text-black/70 border-black/30 hover:border-black/50";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-1 text-sm cursor-pointer transition-all duration-300`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
