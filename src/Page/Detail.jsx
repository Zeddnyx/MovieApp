import { useQuery } from '@tanstack/react-query';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Layouts/Loading';
import { getDetailMovie } from '../services/http';

export default function Detail() {
  const { id } = useParams();
  const image = 'https://image.tmdb.org/t/p/original';

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['detail'],
    queryFn: () => getDetailMovie(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="w-96 gap-4 mt-28 mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-5">
        <img
          className="w-full h-full rounded-md"
          src={image + data.poster_path}
          alt={data.original_title}
        />
        <div className='flex flex-col gap-5'>
          <h1>{data.original_title}</h1>
          <span className="flex gap-5 items-center">
            <p>
              {data.realease_date ? data.release_date.split('-')[0] : 'Unknown'}
            </p>
            <p>{data.adults == false ? 'ABO' : '18+'}</p>
            <p className="flex gap-1">
              <AiFillStar />
              {data.vote_average !== 0 ? data.vote_average : 'N/A'}
            </p>
          </span>
          <div className="flex gap-2 items-center">
            {data.genres?.map((genres, id) => (
              <p key={id}>{genres.name}</p>
            ))}
          </div>
          <div className="md:text-base lg:text-lg">
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
