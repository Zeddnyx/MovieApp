import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Layouts/Loading'

export default function Detail() {
  const { id } = useParams();
  const image = 'https://image.tmdb.org/t/p/original';
  const detailMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=5177f8c79712fa6db85b515df93bc4b6`,
    );
    return data.json();
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['detail'],
    queryFn: detailMovie,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="grid gap-4 mt-20">
      <h1>{data.original_title}</h1>
      <div className="flex gap-2 items-center">
        {data.genres.map((genres, id) => (
          <p key={id}>{genres.name}</p>
        ))}
      </div>
      <div className='w-80 h-96 mx-auto'>
        <img className='w-full h-full' src={image + data.poster_path} alt={data.original_title} />
      </div>
      <div>
        <p>{data.overview}</p>
      </div>
    </section>
  );
}
