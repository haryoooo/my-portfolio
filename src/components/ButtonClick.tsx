import React from "react";

export default function ButtonClick({ titles, url, width }) {
  return (
    <div
      className="flex justify-start 
        cursor-pointer 
        hover:animate-bounce 
        rounded-lg
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-110 
        hover:bg-blue-600 
        active:scale-95 
        transform"
    >
      <div className="flex justify-between bg-black p-3 rounded-md">
        <div className="text-white text-sm font-medium">{titles}</div>
        <div className="pl-2">
          <img src={url} alt={titles} width={width} />
        </div>
      </div>
    </div>
  );
}
