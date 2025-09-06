import { createUser } from "../actions";
import { SubmitButton } from "./submit-button";

export default async function Signup(props: {
  searchParams: Promise<{ message?: string }>;
}) {
  const searchParams = await props.searchParams;
  let message;
  if (searchParams.message) {
    switch (searchParams.message) {
      case "emailnotunique":
        message = "This Email is Already Taken";
        break;

      default:
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Become a part of the Movement
        </h2>

        {/* Logo */}
        {/* <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/dm54zi0ff/image/upload/v1729113943/g-icon_tjgz9i.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div> */}

        {/* Signup Form */}
        <form className="space-y-4" action={createUser}>
          <div>
            <label className="block text-sm font-medium">First Name *</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              name="firstname"
              required
              minLength={2}
              maxLength={15}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name *</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              name="lastname"
              required
              minLength={2}
              maxLength={15}
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Organization</label>
            <select
              name="greek affiliation"
              required
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="None">None</option>
              <option value="Phi Beta Sigma">Phi Beta Sigma</option>
              <option value="Zeta Phi Beta">Zeta Phi Beta</option>
              <option value="Alpha Phi Alpha">Alpha Phi Alpha</option>
              <option value="Alpha Kappa Alpha">Alpha Kappa Alpha</option>
              <option value="Omega Psi Phi">Omega Psi Phi</option>
              <option value="Kappa Alpha Psi">Kappa Alpha Psi</option>
              <option value="Sigma Gamma Rho">Sigma Gamma Rho</option>
              <option value="Delta Sigma Theta">Delta Sigma Theta</option>
              <option value="Iota Phi Theta">Iota Phi Theta</option>
            </select>
          </div>
          <div className="text-red-600 text-center">{message}</div>
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              name="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Chapter</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              name="chapter"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">University</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              name="university"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password *</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="password"
              name="password"
              required
              minLength={8}
              maxLength={20}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must include uppercase, lowercase, and a number.
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-4">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
