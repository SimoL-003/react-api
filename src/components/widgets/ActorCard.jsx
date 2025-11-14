import CardLine from "../elements/CardLine";

export default function ActorCard({
  awards,
  biography,
  birth_year,
  image,
  known_for,
  name,
  nationality,
}) {
  return (
    <li className="card shadow-xl">
      <div className="card__img flex items-center justify-center">
        <img
          className="h-[180px] w-[140px] object-cover rounded-xl"
          src={image}
          alt={name}
        />
      </div>
      <div className="card__text">
        <h4 className="text-amber-400">{name}</h4>
        <CardLine title={"Birth year: "} text={birth_year} />
        <CardLine title={"Nationality: "} text={nationality} />
        <CardLine title={"Awards: "} text={awards} />
        <CardLine title={"Known for: "} text={known_for} />
        <CardLine title={"Bio: "} text={biography} />
      </div>
    </li>
  );
}
