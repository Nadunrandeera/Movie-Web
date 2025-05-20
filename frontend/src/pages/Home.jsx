import { useState } from "react";
import MovieCard from "../componenets/MovieCard";
import '../css/Home.css'

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id:1,Title: "Tom Rider", release_date: "2023-01-01" },
        { id:2,Title: "Harry Potter", release_date: "2005-04-03" },
        { id:3,Title: "Got", release_date: "2010-06-03" },
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery); //search query
        // Perform search logic here
        // For example, you can filter the movies array based on the search query
        // const filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchQuery("");
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
                {movies.map(
                    (movie) => 
                    (
                    <MovieCard movie={movie} key={movie.id} />
                    )
                    )
                }

            </div>

        </div>
    );
    
}

export default Home;