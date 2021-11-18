
import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
     <h1>Let's build react app</h1>
     <Row title="NETFLIX ORIGINALS" fetchurl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchurl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
