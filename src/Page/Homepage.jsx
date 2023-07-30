import { Link } from 'react-router-dom';
import Loading from '../Components/Layouts/Loading';
import CardMovie from '../Components/CardMovie';
import Slider from '../Components/Slider';
import { getMovies } from '../services/service';
import Pagination from '../Components/Pagination';

export default function HomePage() {
  const image = 'https://image.tmdb.org/t/p/original';

  const { loading, isErr, err, datas } = getMovies();
  if (loading) return <Loading />;
  if (isErr) return <p>{err.message}</p>;
  const results = datas.results;

  return (
    <>
      <div className="grid gap-4">
        <div className="relative w-full h-[700px] bg-mainDesc">
          <Slider path={image} slider={results?.slice(0, 4)} />
        </div>

        <div className="grid grid-cols-4 px-5 place-items-center gap-2 md:gap-10">
          {results?.slice(4, 8).map((data) => {
            return (
              <div key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <img
                    className="rounded w-36 md:w-full"
                    src={image + data.poster_path}
                    alt={data.title}
                  />
                </Link>
              </div>
            );
          })}
        </div>

        <Pagination data={results} />
      </div>
    </>
  );
}
