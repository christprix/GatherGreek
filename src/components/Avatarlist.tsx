import xichilogo from "/public/xichilogo.jpeg";

export default function Avatarlist() {
  return (
    <>
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-12">
            <img src={xichilogo.src} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={xichilogo.src} />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12">
            <img src={xichilogo.src} />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-12">
            <span>+99</span>
          </div>
        </div>
      </div>
    </>
  );
}
