import { movies } from "../../data/movies";
import type { Movie } from "../../types/types";
import MovieRow from "./MovieComponents/MovieRow";
import "./Movies.scss";

const Movies = () => {
    const sorted = movies
        .slice()
        .sort((a: Movie, b: Movie) => a.showTime - b.showTime);

    return (
        <>
            {sorted.map((movie: Movie) => (
                <MovieRow key={`${movie.title}-${movie.showTime}`} {...movie} />
            ))}
        </>
    );
};

export default Movies;
