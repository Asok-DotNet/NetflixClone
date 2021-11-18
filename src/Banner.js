import React from 'react'
import requests from './request';
import axios from './axios';
import './banner.css';

function Banner() {

    const [movie, setMovie] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchRomanceMovies);
            // console.table(request.data.results);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    // console.log(movie);

    return (
        <header className="banner"
            style={{
                backgroundsize: 'cover',
                backgroundPosition: 'center center',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`

            }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </header>
    )
}

export default Banner
