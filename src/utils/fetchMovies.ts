export const fetchMovies = async (query: string) => {
  const API_KEY = "ac01a8abc1fc8354f8efc93ef82d50a4"; // Your API key from TMDB
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data.results || []; // Return an empty array if no results
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
