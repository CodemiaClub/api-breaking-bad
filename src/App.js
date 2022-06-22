import { useState } from "react";
import "./App.css";
//[{"episode_id":60,"title":"Ozymandias","season":"5","air_date":"09-15-2013","characters":["Walter White","Jesse Pinkman","Skyler White","Hank Schrader","Marie Schrader","Walter White Jr.","Todd Alquist","Jack Welker","Steve Gomez"],"episode":"14","series":"Breaking Bad"}]

function App() {
  const [movie, setMovie] = useState(null);

  let actualizar = () => {
    fetch("https://www.breakingbadapi.com/api/episodes/60")
      .then(response => {
        return response.json();
      })
      .then(movieResponse => {
        if (movieResponse.length > 0) {
          setMovie(movieResponse[0]);
        }
      });
  };

  return (
    <div className="App">
      <button className="info" onClick={actualizar}>
        Nuevo episodio
      </button>
      {movie !== null && (
        <>
          <div className="pelicula"></div>
          <div className="informacion">{movie.episode_id}</div>
        </>
      )}
    </div>
  );
}

export default App;
