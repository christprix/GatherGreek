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

export function AvatarIcon({ icon }: any) {
  return (
    <div className="avatar">
      <div className="rounded-full">
        <>{icon}</>
      </div>
    </div>
  );
}
