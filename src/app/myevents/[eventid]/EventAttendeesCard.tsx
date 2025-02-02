export default function EventAttendeesCard({ user }: any) {
  return (
    <div className="collapse bg-base-100 border-2 border-solid ">
      <input type="checkbox" />
      <div className="collapse-title text-md font-small">
        <div className="flex space-x-2">
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div>
            <ul>{user.organization}</ul>
          </div>
        </div>
      </div>
      <div className="collapse-content ">
        <div className="flex space-x-3">
          <div>Contact Info:</div>
          <ul>{user.email}</ul>
          <ul>{user.university}</ul>
        </div>
      </div>
    </div>
  );
}
