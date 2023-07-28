import { BiTimeFive } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

export default function ShortInfo({ data }) {
  return (
    <span className="flex gap-5 items-center py-1">
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
        <p className="text-[#FABD2F]">
          <AiFillStar />
        </p>
        {data.vote_average !== 0 ? data.vote_average : 'N/A'}
      </p>
    </span>
  );
}
