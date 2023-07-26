import React from 'react';
import { useParams  } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Layouts/Loading';
import { getSearchMovie } from '../services/http';
import CardMovie from '../Components/CardMovie';

export default function Search() {
  const { params } = useParams();
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['search'],
    queryFn: () => getSearchMovie(params),
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  if (!isError && !isLoading && data.results.length === 0)
    return <h1>Nothing Found "{id}"</h1>;

  return (
    <section className="px-2 mt-20 grid gap-3">
      <div>
        <h1>Results for "{id}"</h1>
      </div>
      <CardMovie results={data.results} />
    </section>
  );
}
