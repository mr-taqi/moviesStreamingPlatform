import axios from 'axios';

export default function Home({ movies }) {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <div key={movie.id} className="p-4 bg-gray-800 rounded-lg shadow-md">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded-md"
                        />
                        <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
                        <p className="text-gray-400">{movie.release_date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const API_KEY = process.env.TMDB_API_KEY;
    const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );

    return {
        props: {
            movies: response.data.results,
        },
    };
}
