"use client";
import { faArrowDownUpAcrossLine } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DateSearch() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(query);
    const encodedQuery = encodeURI(query);
    router.push(`/events?date=${encodedQuery}`);
  };

  return (
    <form onSubmit={onSearch} className="w-full">
      <label className="w-full max-w-lg">
        <div className="label">
          <span className="label-text text-xl font-bold">Event Date</span>
        </div>
        <input
          required
          onChange={(event) => setQuery(event.target.value)}
          type="date"
          defaultValue={query}
          name="event_date"
          className="input input-bordered w-full max-w-lg"
        />
      </label>
      <button type="submit" className="btn btn-primary my-1 w-full max-w-lg">
        Search
      </button>
    </form>
  );
}
