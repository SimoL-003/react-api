import { useState, useEffect } from "react";
import axios from "axios";
import ActorCard from "./components/widgets/ActorCard";

function App() {
  const [actresses, setActresses] = useState([]);

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
                <ActorCard
                  key={id}
                  awards={awards}
                  biography={biography}
                  birth_year={birth_year}
                  image={image}
                  name={name}
                  nationality={nationality}
                />
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
