import React, { useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

export default function Slider({ slider, path }) {
  const [index, setIndex] = useState(0);
  setInterval(() => {
    if (index === slider.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }, 10000);

  return (
    <div className="slider-auto">
      <div className="slider-image-bg2"></div>
      <div className="slider-text">
        <h2>{slider[index].title}</h2>
        <span className="flex gap-5 items-center mb-2">
          <span className="flex items-center gap-1">
            <BiTimeFive />
            <p>
              {slider[index].release_date
                ? slider[index].release_date.split('-').join(' ')
                : 'Unknown'}
            </p>
          </span>
          <p>{slider[index].adults == false ? 'ABO' : '18+'}</p>
          <p className="flex gap-1 items-center">
            <AiFillStar />
            {slider[index].vote_average !== 0 ? slider[index].vote_average : 'N/A'}
          </p>
        </span>
        <p className="text-mainText h-12 overflow-hidden md:text-base">
          {slider[index].overview}
        </p>
      </div>
      <img src={path + slider[index].poster_path} alt="image" />
    </div>
  );
}
