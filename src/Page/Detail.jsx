import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';


export default function Detail() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery('detail-data', () => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5177f8c79712fa6db85b515df93bc4b6`)
  })

  if(isLoading) return 'loading ...'
  if(error) return 'error bro'

  console.log(data)
  return <section>
    <h1>{data.results.title}</h1>
    </section>;
}
