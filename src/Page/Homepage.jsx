import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../Components/Layouts/Loading'

const fetching = async () => {
  const url =
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`;
  const data = await fetch(`${url}`);
  return data.json();
};

export default function HomePage() {
  // const [results, setresults] = useState([]);
  const image = 'https://image.tmdb.org/t/p/original';
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['movie-list'],
    queryFn: fetching,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  const results = data.results;

  return (
    <>
      <div className="grid gap-4">
        <img
          className="w-full h-80 object-cover object-center"
          src={image + results[2].poster_path}
          alt={results.title}
        />

        <div className="grid grid-cols-4 px-5 place-items-center gap-2 md:gap-10">
          {results.slice(0, 12).map((data) => {
            return (
              <div key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <img
                    // onClick={refetch}
                    className="rounded w-36 md:w-full"
                    src={image + data.poster_path}
                    alt={data.title}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="px-5 grid gap-8">
          {results.slice(0, 15).map((data) => {
            return (
              <div
                key={data.id}
                className="border-b border-mainDesc pb-5 grid gap-1"
              >
                <Link to={`/detail/${data.id}`}>
                  <h1 /* onClick={refetch} */>{data.title}</h1>
                </Link>
                <span className="flex gap-5">
                  <p>{data.release_date}</p>
                  <p>{data.adults === false ? '' : '18+'}</p>
                  <p>#{data.vote_average}</p>
                </span>
                <div className="flex items-start gap-2">
                  <img
                    className="w-48 lg:w-72 rounded"
                    src={image + data.poster_path}
                    alt={data.title}
                  />
                  <p className='pr-5 md:pr-20 lg:pr-36 lg:text-md'>{data.overview}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
