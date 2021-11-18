import React from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(props.fetchurl);
            // console.table(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchurl])

    return (
        <div className="row">
            <h2 className="row__title">{props.title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${props.isLargerRow && "row__posterLarge"}`}
                        src={`${base_url}${props.isLargerRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row
