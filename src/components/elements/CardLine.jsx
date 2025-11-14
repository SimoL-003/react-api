export default function CardLine({ title, text }) {
  return (
    <div className="mt-2">
      <h5 className="inline">{title}</h5>
      <span className="text-base font-normal leading-[1.5px]">{text}</span>
    </div>
  );
}
