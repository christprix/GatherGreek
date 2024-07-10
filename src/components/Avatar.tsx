import xichilogo from "/public/xichilogo.jpeg";
export default function Avatar() {
  return (
    <div className="avatar">
      <div className="rounded-full">
        <img src={xichilogo.src} />
      </div>
    </div>
  );
}
