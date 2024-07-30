import ProfileCard from "./ProfileCard";
export default function ProfileCardList({ events }: any) {
  const myEvents = events.map((e: any) => {
    return <ProfileCard event={e} key={e.id}></ProfileCard>;
  });
  return <>{myEvents}</>;
}
