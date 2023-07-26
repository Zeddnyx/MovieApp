import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Nav() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <nav>
      <Link to="/">
        <h1>MovieApp</h1>
      </Link>
      <div>
        <SearchBar search={search} setQuery={setQuery} handleClick={handleClick} />
      </div>
    </nav>
  );
}
