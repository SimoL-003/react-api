import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [actresses, setActresses] = useState([]);
  console.log(actresses);

  function fetchActresses() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActresses(res.data));
  }

  useEffect(() => {
    fetchActresses();
  }, []);

  return (
    <>
      <main className="min-h-screen py-16 bg-neutral-900">
        <div className="container">
          <h1>Holliwood Walk of Fame</h1>

          <ul className="card-container grid grid-cols-4 gap-4">
            {actresses.map(
              ({
                awards,
                biography,
                birth_year,
                id,
                image,
                name,
                nationality,
              }) => (
                <li key={id} className="card p-8 border-2 border-white">
                  <div className="card__text">
                    <div className="card__img">
                      <img src={image} alt={name} />
                    </div>
                    <h4>{name}</h4>
                    <p>{birth_year}</p>
                    <p>{nationality}</p>
                    <p>{awards}</p>
                    <p>{biography}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </main>
    </>
  );
}
// nome;
// anno di nascita;
// nazionalità;
// biografia;
// immagine;
// riconoscimenti.
export default App;
