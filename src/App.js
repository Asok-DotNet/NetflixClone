
import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <h1>Let's build react app</h1>
      <Row title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
