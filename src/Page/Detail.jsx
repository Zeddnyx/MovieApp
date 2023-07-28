import { AiTwotoneFolder, AiOutlineBorderlessTable } from 'react-icons/ai';
import { BsFillChatSquareQuoteFill } from 'react-icons/bs';
import { FaLanguage } from 'react-icons/fa';
import { CgStudio } from 'react-icons/cg';
import { MdNewReleases } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Loading from '../Components/Layouts/Loading';
import ShortInfo from '../Components/ShortInfo';
import { getDetailMovie } from '../services/service';
import RelatedPost from '../Components/RelatedPost';

export default function Detail() {
  const { id } = useParams();
  const image = 'https://image.tmdb.org/t/p/original';

  const { isLoading, isError, error, data } = getDetailMovie(id);
  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;

  return (
    <section className="max-w-5xl gap-4 mt-28 mx-auto">
      <div className="w-full flex flex-col md:flex-row gap-5">
        {/* <img */}
        {/*   className="w-72 md:w-80 h-full rounded-md mx-auto" */}
        {/*   src={image + data.poster_path} */}
        {/*   alt={data.original_title} */}
        {/* /> */}
        <div className="flex flex-col gap-5">
          <span>
            <h1>{data.title}</h1>
            <h3 className="text-mainDesc">{data.original_title}</h3>
          </span>
          <ShortInfo data={data} />
          <div className="flex flex-col gap-2">
            <span className="flex gap-1">
              <AiTwotoneFolder />
              {data.genres?.map((genres, id) => (
                <p key={id}>{genres.name}</p>
              ))}
            </span>
            <span className="flex gap-1 items-center">
              <FaLanguage />
              <p> {data.spoken_languages[0]?.english_name}</p>
            </span>
            <span className="flex gap-1 items-center">
              <MdNewReleases />
              <p>{data.status}</p>
            </span>
            <span className="flex gap-1 items-center">
              <AiOutlineBorderlessTable />
              <p>{data.popularity}</p>
            </span>
            {data.production_companies && (
              <span className="flex gap-1 items-center flex-wrap">
                <CgStudio />
                {data.production_companies?.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </span>
            )}
            {data.tagline && (
              <span className="flex gap-1 items-center">
                <BsFillChatSquareQuoteFill />
                <p>{data.tagline}</p>
              </span>
            )}
          </div>
          <div className="md:text-base lg:text-lg">
            <p>{data.overview}</p>
          </div>
        </div>
        <RelatedPost query={data.title} />
      </div>
    </section>
  );
}
