import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
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

  if (isLoading) return 'Loading ...';
  if (isError) return <p>{error.message}</p>;

  console.log(data);
  return (
    <section className='section'>
      <div>
        {data.genres.map((genres) => (
          <p className='flex gap-2' key={genres}>{genres.name}</p>
        ))}
      </div>
    </section>
  );
}
