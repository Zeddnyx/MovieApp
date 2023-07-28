const URL = "https://api.themoviedb.org/3/";
const KEY = import.meta.env.VITE_API_KEY;

export const getMovie = async () => {
  const url = `${URL}movie/popular?api_key=${KEY}`;
  const data = await fetch(`${url}`);
  return data.json();
};

export const getSearchMovie = async (parmas) => {
  const data = await fetch(
    `${URL}search/movie?api_key=${KEY}&query=${parmas}`,
  );
  return data.json();
};

export const getDetailMovie = async (id) => {
  const data = await fetch(
      `${URL}movie/${id}?api_key=${KEY}`,
    );
    return data.json();
}
