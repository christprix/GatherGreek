import profilepic from "/public/headshot.jpg";

export default function ProfileAvatar() {
  return (
    <div className="avatar">
      <div className="w-16 rounded-full">
        <img src={profilepic.src} />
      </div>
    </div>
  );
}
