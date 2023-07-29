import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';

export default function SearchBar({ search, setSearch }) {
  const handleQuery = (e) => {
    setSearch(e);
  };
  return (
    <div className="flex w-full items-center relative">
      <input
        onChange={(e) => handleQuery(e.target.value)}
        type="text"
        className="w-full text-sm p-1"
        placeholder="Find Movie"
      />
      <Link to={`/search/${search}`}>
        <div className="bg-gray py-1 text-mainDesc">
          <BiSearchAlt2 size="20" />
        </div>
      </Link>
    </div>
  );
}
