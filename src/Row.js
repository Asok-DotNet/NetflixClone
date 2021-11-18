import React from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchurl);
            console.table(request.data.results);
            setMovies(request.data.results);
            return request;
            //setMovies(json.Search);
        }
        fetchData();
    }, [props.fetchurl])

    return (
        <div>
            <h2>{props.title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row
