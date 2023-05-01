import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Components/Layouts/Loading';

export default function Search() {
  const { id } = useParams();
  const image = 'https://image.tmdb.org/t/p/original';
  const detailMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5177f8c79712fa6db85b515df93bc4b6&query=${id}`,
    );
    return data.json();
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['search'],
    queryFn: detailMovie,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  if (!isError && !isLoading && data.results.length === 0)
    return <h1>Nothing Found "{id}"</h1>;

  return (
    <section>
      <div className="px-2 grid gap-8 mt-20">
        {data.results.map((data) => {
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
                <p className="pr-5 md:pr-20 lg:pr-36 lg:text-md">
                  {data.overview}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
