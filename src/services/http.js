const KEY = import.meta.env.VITE_API_KEY;
const API = import.meta.env.VITE_API_URL;

export const getMovie = async () => {
  const url = `${API}3/movie/popular?api_key=${KEY}`;
  const data = await fetch(`${url}`);
  return data.json();
};

export const getSearchMovie = async (parmas) => {
  const data = await fetch(
    `${API}3/search/movie?api_key=${KEY}&query=${parmas}`,
  );
  return data.json();
};

export const getDetailMovie = async (id) => {
  const data = await fetch(
      `${API}3/movie/${id}?api_key=${KEY}`,
    );
    return data.json();
}
