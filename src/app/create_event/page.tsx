import blackparty from "/public/blackparty.jpg";
import Link from "next/link";
export default async function Page() {
  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={blackparty.src}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <div className="text-5xl font-bold">Connect your Community</div>
            <p className="py-6">
              Whether you're planning a fundraiser, social gathering, or
              community service event, our easy-to-use interface makes it simple
              to create and manage your events. Join us in strengthening our
              bonds, fostering community spirit, and making a positive impact
              together
            </p>
            <Link href={"/"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
