import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const AiRouteDetails = () => {
  const a = window.location.pathname.split("/");

  return (
    <p className="inline-flex self-center md:text-lg text-sm">
                QuickTrack
                {a.map((b,id) => {
                  return (
                    <span key={id} className="text-gray-500 inline-flex self-center">
                    
                      {b}
                      <IoIosArrowForward className="inline-flex self-center" />{" "}
                    </span>
                  );
                })}
              </p>
  )
}

export default AiRouteDetails