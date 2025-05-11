import MovieCard from "../componenets/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id:1,Title: "Tom Rider", release_date: "2023-01-01" },
        { id:2,Title: "Harry Potter", release_date: "2005-04-03" },
        { id:3,Title: "Got", release_date: "2010-06-03" },
    ];
    const handleSearch = (e) => {
        alert(searchQuery); 
    }
    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for a movie" 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
                </form> 
                
            <div className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}

            </div>

        </div>
    );
    
}

export default Home;