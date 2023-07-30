import React from 'react';

export default function Loading() {
  return (
    <section className="grid gap-8 px-5 mt-20">
      <div className="grid gap-5 w-full h-full animate-pulse duration-300">
        <div className="w-full h-[470px] bg-mainDesc rounded-md"></div>
        <div className="w-60 h-20 bg-mainDesc rounded-md"></div>
        <div className="w-full h-full flex gap-2">
          <div className="w-full h-20 bg-mainDesc rounded-md"></div>
          <div className="w-full h-20 bg-mainDesc rounded-md"></div>
          <div className="w-full h-20 bg-mainDesc rounded-md"></div>
        </div>
      </div>

      <div className=" grid gap-5 w-full h-full animate-pulse duration-300">
        <div className="w-full h-20 bg-mainDesc rounded-md"></div>
        <div className="w-full h-40 bg-mainDesc rounded-md"></div>
        <div className="w-full h-20 bg-mainDesc rounded-md"></div>
      </div>
    </section>
  );
}
