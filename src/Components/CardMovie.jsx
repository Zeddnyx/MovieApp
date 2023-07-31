import { Link } from 'react-router-dom';
import ShortInfo from './ShortInfo';

export default function CardMovie({ data }) {
  const image = 'https://image.tmdb.org/t/p/original/';
  const placeHolder = <div className="h-full w-48 lg:w-60"></div>;
  return (
    <div className="grid grid-cols-1 gap-5 px-5">
      {data?.map((data) => {
        return (
          <div
            key={data.id}
            className="border-b border-mainDesc pb-5 grid gap-1 w-full"
          >
            <Link to={`/detail/${data.id}`}>
              <h1>{data.title}</h1>
            </Link>
            <ShortInfo data={data} />
            <Link to={`/detail/${data.id}`}>
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
            </Link>
          </div>
        );
      })}
    </div>
  );
}
