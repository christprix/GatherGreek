import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import UserCardList from "@/components/UserCardList";
import { findAllUsers } from "../actions";

export default async function Admin() {
  const session = await getServerSession(options);
  const users = await findAllUsers();
  if (session?.user?.admincheck) {
    return (
      <>
        <div>
          <div>User to Be Verified</div>
          <div>
            <UserCardList users={users}></UserCardList>
          </div>
        </div>
      </>
    );
  }
  return <>Sorry You Are Not an admin</>;
}
