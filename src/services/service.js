import { useQuery } from '@tanstack/react-query';
import { httpDetailMovie, httpMovie, httpSearchMovie } from './http';

export const getMovies = () => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['movies'],
    queryFn: () => httpMovie(),
  });

  const [loading, isErr, err, datas] = [isLoading, isError, error, data];
  return { loading, isErr, err, datas };
};

export const getDetailMovie = (id) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['detail', id],
    queryFn: () => httpDetailMovie(id),
  });

  return { isLoading, isError, error, data };
};

export const getSearchMovie = (query) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['search'],
    queryFn: () => httpSearchMovie(query),
  });

  return { isLoading, isError, error, data };
};
