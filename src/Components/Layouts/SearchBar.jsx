import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function SearchBar({ search, setQuery, handleClick }) {
  return (
    <form className="flex w-full items-end justify-end relative">
      <input
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        className="w-full text-sm"
        placeholder="Find Movie"
      />
      <Link
        to={`/search/${search}`}
        className="bg-gray absolute right-0 rounded-md text-mainDesc"
      >
        <button onClick={handleClick} type="submit">
          <BiSearchAlt2 size="20" />
        </button>
      </Link>
    </form>
  );
}
