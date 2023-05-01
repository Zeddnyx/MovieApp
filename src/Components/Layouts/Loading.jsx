import React from 'react';

export default function Loading() {
  return (
    <section className='grid gap-8 px-5'>
      <div className=" grid gap-5 w-full h-full animate-pulse duration-300">
        <div className="w-40 h-5 bg-mainDesc rounded-xl"></div>
        <div className="w-full h-10 bg-mainDesc rounded-xl"></div>
        <div className="w-80 h-8 bg-mainDesc rounded-xl"></div>
      </div>

      <div className=" grid gap-5 w-full h-full animate-pulse duration-300">
        <div className="w-96 h-5 bg-mainDesc rounded-xl"></div>
        <div className="w-full h-4 bg-mainDesc rounded-xl"></div>
        <div className="w-full h-14 bg-mainDesc rounded-xl"></div>
      </div>
    </section>
  );
}
