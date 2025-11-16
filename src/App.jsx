import { useState, useEffect } from "react";
import axios from "axios";
import ActorCard from "./components/widgets/ActorCard";
import { AnimatePresence } from "motion/react";

function App() {
  const [actresses, setActresses] = useState([]);
  const [actors, setActors] = useState([]);
  const [allActors, setAllActors] = useState([]);
  const [nationalities, setNationalities] = useState([]);
  const [nationalitySelect, setNationalitySelect] = useState("");
  const [allActorsFiltered, setAllActorsFiltered] = useState(allActors);
  const [actorsIdMod, setActorsIdMod] = useState(actors);

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

  // Sistema gli ID dell'array actors (altrimenti combaciano con quelli dell'array actresses)
  useEffect(() => {
    setActorsIdMod(
      actors.map((curActor) => ({ ...curActor, id: curActor.id + 1000 }))
    );
  }, [actors]);

  // Unisce gli array di attori e attrici
  useEffect(() => {
    setAllActors(actorsIdMod.concat(actresses));
  }, [actors, actresses]);

  // Crea l'array delle nazionalità
  useEffect(() => {
    const nats = [
      ...new Set(allActors.map((curActor) => curActor.nationality)),
    ].sort();
    setNationalities(nats);
  }, [allActors]);

  // Filtro
  useEffect(() => {
    nationalitySelect
      ? setAllActorsFiltered(
          allActors.filter((a) => a.nationality === nationalitySelect)
        )
      : setAllActorsFiltered(allActors);
  }, [nationalitySelect, allActors]);

  return (
    <>
      <main className="min-h-screen py-16 bg-slate-900">
        <div className="container">
          <h1 className="mb-8 text-center">Holliwood Walk of Fame</h1>

          <div className="filter flex gap-8">
            <select
              name="nationality"
              id="nationality"
              value={nationalitySelect}
              onChange={(e) => setNationalitySelect(e.target.value)}
              className="px-4 py-2 text-violet-200 outline-2 outline-blue-600  focus-visible:outline-amber-400 rounded-md bordr-out transition-colors duration-150"
            >
              <option value="">-- Filter by nationality --</option>
              {nationalities.map((curNationality, index) => (
                <option key={index} value={curNationality}>
                  {curNationality}
                </option>
              ))}
            </select>
            <button
              onClick={() => setNationalitySelect("")}
              className="px-4 py-2 text-violet-200 outline-2 outline-blue-600  rounded-md cursor-pointer hover:bg-blue-600 transition-colors duration-150"
            >
              Reset
            </button>
          </div>

          {/* ACTORS CARDS */}
          <ul className="card-container py-8 grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-8">
            <AnimatePresence>
              {allActorsFiltered
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(
                  ({
                    awards,
                    biography,
                    birth_year,
                    id,
                    image,
                    name,
                    nationality,
                    most_famous_movies,
                    known_for,
                  }) => {
                    const bestFilms = (most_famous_movies || known_for).join(
                      ", "
                    );
                    return (
                      <ActorCard
                        key={id}
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
            </AnimatePresence>
          </ul>
        </div>
      </main>
    </>
  );
}
export default App;
