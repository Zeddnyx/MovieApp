import React from 'react';
import { useState } from 'react';
import { BiSearchAlt2, BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const handleMenu = () => setMenu(!menu);
  const handleClick = (e) => {
    e.preventDefault();
    setSearch(query);
    setMenu(!menu);
  };

  return (
    <nav>
      <div
        className={` ${
          !menu
            ? 'left-[-100%] opacity-0'
            : 'left-0 ease-in opacity-100 border-r border-mainDesc'
        } navigasi`}
      >
        <div>
          <form className="flex w-full items-center relative">
            <input
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="w-full"
              placeholder="Find Movie"
            />
            <button
              onClick={handleClick}
              type="submit"
              className="bg-gray p-1 rounded-md relative right-6 text-mainDesc"
            >
              <Link to={`/search/${search}`}>
                <BiSearchAlt2 size="24" />
              </Link>
            </button>
          </form>
          <div className="mt-5">
            <h3>
              <Link to="/">Home </Link>
            </h3>
          </div>
        </div>
      </div>

      <h1>Parah.lu</h1>

      <button
        className="px-5 outline-none z-20 text-mainDesc"
        onClick={handleMenu}
      >
        {!menu ? <BiMenuAltRight size="25" /> : <MdOutlineClose size="25" />}
      </button>
    </nav>
  );
}
