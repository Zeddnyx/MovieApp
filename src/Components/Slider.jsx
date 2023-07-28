import React, { useState } from 'react';
import ShortInfo from './ShortInfo';

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
        <ShortInfo data={slider[index]} />
        <p className="text-mainText h-12 overflow-hidden md:text-base">
          {slider[index].overview}
        </p>
      </div>
      <img src={path + slider[index].poster_path} alt="image" />
    </div>
  );
}
