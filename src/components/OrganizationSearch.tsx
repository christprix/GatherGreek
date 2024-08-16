"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrganizationSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(query);
    const encodedQuery = encodeURI(query);
    router.push(`/events?org=${encodedQuery}`);
  };

  return (
    <form onSubmit={onSearch} className="w-full">
      <label className="w-full max-w-lg">
        <div className="label">
          <span className="label-text text-xl font-bold">
            Search By Organization
          </span>
        </div>
        <select
          onChange={(event) => setQuery(event.target.value)}
          defaultValue={query}
          required
          name="event_type"
          className="input input-bordered w-full max-w-lg"
        >
          <option value={"PhiBetaSigma"}>Phi Beta Sigma</option>
          <option value={"ZetaPhiBeta"}>Zeta Phi Beta</option>
          <option value={"Alpha Kappa Alpha"}>Alpha Kappa Alpha</option>
          <option value={"AlphaPhiAlpha"}>Alpha Phi Alpha</option>
          <option value={"Omega Psi Phi"}>Omega Psi Phi</option>
          <option value={"SigmaGammaRho"}>Sigma Gamma Rho</option>
          <option value={"DeltaSigmaTheta"}>Delta Sigma Theta</option>
          <option value={"KappaAlphaPsi"}>Kappa Alpha Psi</option>
        </select>
      </label>
      <button type="submit" className="btn max-w-lg btn-primary my-1 w-full">
        Search
      </button>
    </form>
  );
}
