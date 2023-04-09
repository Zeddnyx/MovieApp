import React from 'react'
import { useState } from 'react';
import { BiSearchAlt2, BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  return (
    <nav>
      <div
        className={` ${
          !menu ? 'left-[-100%] opacity-0' : 'left-0 ease-in opacity-100 border-r border-mainDesc'
        } navigasi`}
      >
        <div>
          <div className="flex w-full items-center relative">
            <input type="text" className='w-full' />
            <span className='bg-gray p-1 rounded-md relative right-6 text-mainDesc'>
              <BiSearchAlt2 size="24" />
            </span>
          </div>

    <div>
      holaa
    </div>
    <div>
      holaa
    </div>
    <div>
      holaa
    </div>
        </div>
      </div>

      <button className="px-10 outline-none z-20 text-mainDesc" onClick={handleMenu}>
        {!menu ? <BiMenuAltRight size="25" /> : <MdOutlineClose size="25" />}
      </button>
    </nav>
  );
}
