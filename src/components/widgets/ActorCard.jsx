export default function ActorCard({
  awards,
  biography,
  birth_year,
  image,
  name,
  nationality,
}) {
  return (
    <li className="card p-8 border-2 border-white">
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
  );
}
