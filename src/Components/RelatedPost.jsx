import { getSearchMovie } from '../services/service';
import { Link } from 'react-router-dom';

export default function RelatedPost({ query }) {
  const { data } = getSearchMovie(query);
  return (
    <div className="pb-2 mt-10">
      {data && (
        <div>
          <p className="pb-2 text-base font-bold text-textDesc">Related Posts:</p>
          {data.results.map((data) => {
            return (
              <div className="pb-2" key={data.id}>
                <Link to={`/detail/${data.id}`}>
                  <p>{data.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
