type Movie = {
  id: number;
  backdropPath: string;
  genreIds: number[];
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number;
};

const movies: Movie[];

export default movies;
