import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const fetching = async () => {
  const url =
    'https://api.themoviedb.org/3/movie/popular?api_key=5177f8c79712fa6db85b515df93bc4b6';
  const data = await fetch(`${url}`);
  return data.json();
};

export default function HomePage() {
  const image = 'https://image.tmdb.org/t/p/original';
  const { isLoading, error, data, refetch } = useQuery('data-fetch', fetching, {
    cacheTime: 2000000,
    enabled: false,
  });

  if (isLoading) return 'loading ...';
  if (error) return 'Ups something went wrong';

  return (
    <>
      <div className="grid gap-4">
        <img
          className="w-full h-40"
          src={image + data.results.poster_path}
          alt={data.results.title}
        />
        <div className="grid grid-cols-4 px-2 gap-2">
          {data.results.slice(0, 12).map((data) => {
            return (
              <div key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <img
                    onClick={refetch}
                    className="rounded"
                    src={image + data.poster_path}
                    alt={data.title}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="px-2 grid gap-8">
          {data.results.slice(0, 15).map((data) => {
            return (
              <div
                key={data.id}
                className="border-b border-mainDesc pb-5 grid gap-1"
              >
                <Link to={`/detail/${data.id}`}>
                  <h1 onClick={refetch}>{data.title}</h1>
                </Link>
                <span className="flex gap-5">
                  <p>{data.release_date}</p>
                  <p>{data.adults === false ? '' : '18+'}</p>
                  <p>#{data.vote_average}</p>
                </span>
                <div className="flex items-start gap-2">
                  <img
                    className="w-40 rounded"
                    src={image + data.poster_path}
                    alt={data.title}
                  />
                  <span className="flex flex-col gap-5 items-start">
                    <p>{data.overview}</p>
                    <button className="btn">Download</button>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
