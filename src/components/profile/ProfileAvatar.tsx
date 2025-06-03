import profilepicdefault from "/public/userimg.png";

export default function ProfileAvatar() {
  return (
    <div className="avatar">
      <div className="w-16 rounded-full bg-base-200 contents">
        <img src={profilepicdefault.src} />
      </div>
    </div>
  );
}
