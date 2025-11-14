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
      <div className="card__img">
        <img
          className="h-full object-cover rounded-tl-2xl"
          src={image}
          alt={name}
        />
      </div>
      <div className="card__text">
        <h4>{name}</h4>
        <p>
          <span>Birth year: </span>
          {birth_year}
        </p>
        <p>
          <span>Nationality: </span>
          {nationality}
        </p>
        <p>
          <span>Awards: </span>
          {awards}
        </p>
        <p>
          <span>Bio: </span>
          {biography}
        </p>
      </div>
    </li>
  );
}
