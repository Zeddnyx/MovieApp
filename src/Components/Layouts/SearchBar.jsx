import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function SearchBar({ search, setQuery, handleClick }) {
  const handleQuery = (e) => {
    setQuery(e);
  };
  return (
    <form className="flex w-full items-center relative">
      <input
        onChange={(e) => handleQuery(e.target.value)}
        type="text"
        className="w-full text-sm"
        placeholder="Find Movie"
      />
      <button onClick={handleClick} type="submit" className="text-mainText">
        <Link to={`/search/${search}`}>
          <BiSearchAlt2 size="25" />
        </Link>
      </button>
    </form>
  );
}
