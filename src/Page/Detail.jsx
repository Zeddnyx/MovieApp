import { AiTwotoneFolder, AiOutlineBorderlessTable } from 'react-icons/ai';
import { BsFillChatSquareQuoteFill, BsCardImage } from 'react-icons/bs';
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
  const image = 'https://image.tmdb.org/t/p/original/';

  const { isLoading, isError, error, data } = getDetailMovie(id);
  if (isLoading) return <Loading />;
  if (isError) return <p>{error.message}</p>;
  console.log("render det")

  const popular = data.popularity.toString();
  const releaseStyle =
    data.status.length === 7 ? 'text-textDesc' : 'text-green-500';
  const popularStyle =
    popular.length <= 2
      ? 'text-red-500'
      : popular.length <= 4
        ? 'text-gray-500'
        : popular.length <= 5
          ? 'text-yellow-500'
          : popular.length <= 6
            ? 'text-blue-500'
            : 'text-green-500';

  return (
    <section className="max-w-5xl gap-4 mt-28 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <div className="flex flex-col gap-5 col-span-2">
          <span>
            <h1>{data.title}</h1>
            <h3 className="text-mainDesc">{data.original_title}</h3>
          </span>
          <ShortInfo data={data} />
          <div className="flex flex-col gap-2">
            <span className="flex gap-1">
              <BsCardImage />
              <p>
                <a href={image + data.poster_path}>Click here</a>
              </p>
            </span>
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
              <p className={releaseStyle}>{data.status}</p>
            </span>
            <span className="flex gap-1 items-center">
              <AiOutlineBorderlessTable />
              <p className={popularStyle}>{popular}</p>
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
            <p>" {data.overview} "</p>
          </div>
        </div>
        <RelatedPost query={data.title} />
      </div>
    </section>
  );
}
