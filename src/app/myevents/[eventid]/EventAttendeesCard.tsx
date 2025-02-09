import { Mail, Building, GraduationCap } from "lucide-react";

export default function UserCard({ user }: any) {
  return (
    <div className="collapse border-2 border-gray-300 rounded-xl shadow-lg bg-white">
      <input type="checkbox" />
      <div className="collapse-title flex justify-between items-center p-4 cursor-pointer peer-checked:bg-gray-100 transition-all">
        <div className="flex items-center space-x-3">
          <div className="text-lg font-semibold">
            {user.firstName} {user.lastName}
          </div>
          <div className="text-sm text-gray-500 flex items-center space-x-1">
            <Building size={16} />
            <span>{user.organization}</span>
          </div>
        </div>
      </div>
      <div className="collapse-content bg-gray-50 p-4 rounded-b-xl">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-gray-700">
            <Mail size={16} />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <GraduationCap size={16} />
            <span>{user.university}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function EventAttendeesCard({ user }: any) {
//   return (
//     <div className="static collapse bg-base-100 border-2 border-solid">
//       <input type="checkbox" />
//       <div className="static collapse-title text-md font-small">
//         <div className="flex space-x-2">
//           <div>
//             {user.firstName} {user.lastName}
//           </div>
//           <div>
//             <ul>{user.organization}</ul>
//           </div>
//         </div>
//       </div>
//       <div className="collapse-content ">
//         <div className="flex space-x-3">
//           <div>Contact Info:</div>
//           <ul>{user.email}</ul>
//           <ul>{user.university}</ul>
//         </div>
//       </div>
//     </div>
//   );
// }
