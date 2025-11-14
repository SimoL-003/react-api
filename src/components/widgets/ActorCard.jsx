import CardLine from "../elements/CardLine";

export default function ActorCard({
  awards,
  biography,
  birth_year,
  image,
  name,
  nationality,
}) {
  return (
    <li className="card">
      <div className="card__img flex items-center">
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
        <CardLine title={"Bio: "} text={biography} />
      </div>
    </li>
  );
}
