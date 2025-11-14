import { useState, useEffect } from "react";
import axios from "axios";
import ActorCard from "./components/widgets/ActorCard";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [allActors, setAllActors] = useState([]);

  function fetchActresses() {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((res) => setActresses(res.data));
  }

  function fecthActors() {
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((res) => setActors(res.data));
  }

  useEffect(() => {
    fetchActresses();
    fecthActors();
  }, []);

  useEffect(() => {
    setAllActors(actors.concat(actresses));
  }, [actors, actresses]);

  return (
    <>
      <main className="min-h-screen py-16 bg-slate-900">
        <div className="container">
          <h1 className="mb-8 text-center">Holliwood Walk of Fame</h1>

          {/* MALE ACTORS CARDS */}
          <ul className="card-container py-8 grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-8">
            {allActors
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(
                (
                  {
                    awards,
                    biography,
                    birth_year,
                    id,
                    image,
                    name,
                    nationality,
                    most_famous_movies,
                    known_for,
                  },
                  index
                ) => {
                  let bestFilms;
                  if (most_famous_movies) {
                    bestFilms = most_famous_movies.join(", ");
                  }
                  if (known_for) {
                    bestFilms = known_for.join(", ");
                  }
                  return (
                    <ActorCard
                      key={index}
                      awards={
                        typeof awards == "string" ? awards : awards.join(", ")
                      }
                      biography={biography}
                      birth_year={birth_year}
                      image={image}
                      known_for={bestFilms}
                      name={name}
                      nationality={nationality}
                    />
                  );
                }
              )}
          </ul>
        </div>
      </main>
    </>
  );
}
export default App;
