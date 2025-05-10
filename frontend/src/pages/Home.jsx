import MovieCard from "../componenets/MovieCard";

function Home() {
    const movies = [
        { id:1,Title: "Tom Rider", release_date: "2023-01-01" },
        { id:2,Title: "Harry Potter", release_date: "2005-04-03" },
        { id:3,Title: "Got", release_date: "2010-06-03" },
    ];
    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>

        </div>
    )
    
}
export default Home;