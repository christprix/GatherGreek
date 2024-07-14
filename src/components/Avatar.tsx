import xichilogo from "/public/xichilogo.jpeg";
export default function Avatar() {
  return (
    <div className="avatar">
      <div className="rounded">
        <img src={xichilogo.src} />
      </div>
    </div>
  );
}
