import UserCard from "./UserCard";
import prisma from "@/lib/prisma";

export default async function UserCardList({ users }: any) {
  const usersList = users.map((e: any) => {
    return <UserCard user={e} key={e.id}></UserCard>;
  });

  return <>{usersList}</>;
}
