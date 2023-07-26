import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function CardMovie({ results }) {
  const image = 'https://image.tmdb.org/t/p/original/';
  const placeHolder = <div className="h-full w-48 lg:w-60"></div>;
  return (
    <section>
      <div className="px-5 grid md:grid-cols-2 gap-5">
        {results.map((data) => {
          return (
            <div
              key={data.id}
              className="border-b border-mainDesc pb-5 grid gap-1"
            >
              <Link to={`/detail/${data.id}`}>
                <h1 /* onClick={refetch} */>{data.title}</h1>
              </Link>
              <span className="flex gap-5 items-center">
                <p>
                  {data.realease_date
                    ? data.release_date.split('-')[0]
                    : 'Unknown'}
                </p>
                <p>{data.adults == false ? 'ABO' : '18+'}</p>
                <p className="flex gap-1">
                  <AiFillStar />
                  {data.vote_average !== 0 ? data.vote_average : 'N/A'}
                </p>
              </span>
              <div className="flex items-start gap-2">
                <img
                  className="w-48 lg:w-60 rounded"
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
    </section>
  );
}
