import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASE_URL

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  )
  return movie.data.results
}

export const searchMovie = async (i) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${i}&page=1&api_key=${apiKey}`
  )
  return search.data
}
