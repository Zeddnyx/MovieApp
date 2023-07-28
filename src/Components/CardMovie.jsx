import { Link } from 'react-router-dom';
import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

export default function CardMovie({ results }) {
  const image = 'https://image.tmdb.org/t/p/original/';
  const placeHolder = <div className="h-full w-48 lg:w-60"></div>;
  return (
    <div className="grid md:grid-cols-2 gap-5 px-5 lg:px-10">
      {results.map((data) => {
        return (
          <div
            key={data.id}
            className="border-b border-mainDesc pb-5 grid gap-1"
          >
            <Link to={`/detail/${data.id}`}>
              <h1>{data.title}</h1>
            </Link>
            <span className="flex gap-5 items-center">
              <span className="flex items-center gap-1">
                <BiTimeFive />
                <p>
                  {data.release_date
                    ? data.release_date.split('-').join(' ')
                    : 'Unknown'}
                </p>
              </span>
              <p>{data.adults == false ? 'ABO' : '18+'}</p>
              <p className="flex gap-1 items-center">
                <AiFillStar />
                {data.vote_average !== 0 ? data.vote_average : 'N/A'}
              </p>
            </span>
            <div className="flex items-start gap-2">
              <img
                className="w-48 lg:w-60 rounded bg-mainDesc"
                src={
                  data.poster_path !== null || undefined
                    ? image + data.poster_path
                    : placeHolder
                }
                alt={data.title}
              />
              <p className="lg:text-base">{data.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
