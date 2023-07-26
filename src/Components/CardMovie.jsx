import { Link } from 'react-router-dom';

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
                <h1 /* onClick={refetch} */>{data.title}</h1>
              </Link>
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
