import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Layouts/Loading';
import { getSearchMovie } from '../services/service';
import Pagination from '../Components/Pagination';

export default function Search() {
  const { id } = useParams();

  const { isLoading, isError, error, data } = getSearchMovie(id);
  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  if (!isError && !isLoading && data.results.length === 0)
    return <h1 className='mt-20 pl-5 md:pl-16'>Nothing Found "{id}"</h1>;

  return (
    <div className="mt-20 grid gap-3">
      <div className="pl-5 ">
        <h1>Results for "{id}"</h1>
      </div>
      <Pagination data={data.results} />
    </div>
  );
}
