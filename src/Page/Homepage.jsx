import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../Components/Layouts/Loading';
import { getMovie } from '../services/http';
import CardMovie from '../Components/CardMovie';

export default function HomePage() {
  const image = 'https://image.tmdb.org/t/p/original';
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['movie-list'],
    queryFn: getMovie,
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  const results = data.results;

  return (
    <>
      <div className="grid gap-4 mt-20">
        <div className="relative w-full h-full">
          <img
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-xl"
            src={image + results[2].poster_path}
            alt={results.title}
          />
        </div>

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

        <CardMovie results={results} />
      </div>
    </>
  );
}
