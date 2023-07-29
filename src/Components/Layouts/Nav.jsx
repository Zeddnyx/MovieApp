import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function Nav() {
  const [search, setSearch] = useState('');

  return (
    <nav>
      <Link to="/">
        <h1>MovieApp</h1>
      </Link>
      <div>
        <SearchBar search={search} setSearch={setSearch}/>
      </div>
    </nav>
  );
}
