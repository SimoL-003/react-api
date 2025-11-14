export default function CardLine({ title, text }) {
  return (
    <div>
      <h5 className="inline">{title}</h5>
      <span>{text}</span>
    </div>
  );
}
