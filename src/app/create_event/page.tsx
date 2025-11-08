import blackparty from "/public/blackparty.jpg";
import Link from "next/link";
import CreateEventModal from "@/components/eventsForm/CreateEventModal";
import { StripeOnboardForm } from "@/components/stripe/StripeOnboardForm";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Page() {
  type User = {
    id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
    stripeid?: string; // optional property
  };

  const session = await getServerSession(options);
  const user = session?.user as User;
  const userid = user?.id;
  console.log(user);
  const stripeid = user?.stripeid;

  return (
    <>
      <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col-reverse">
          <div className="flex flex-col md:flex-row md:w-full md:justify-around">
            <div className="card bg-base-100 image-full w-96 shadow-xl">
              <figure>
                <img src={blackparty.src} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Create an Event</h2>
                <p>
                  Events for the whole community. Choose from Social events,
                  classes, politics and more!
                </p>
                <div className="card-actions justify-end">
                  {/* SHOW MODAL IF THEY HAVE NO STRIPE ID */}
                  {!stripeid && (
                    <>
                      <CreateEventModal userId={userid}></CreateEventModal>
                    </>
                  )}
                  {/* SHOW CREATE EVENT LINK IF THEY HAVE STRIPEID */}
                  {stripeid && (
                    <Link
                      href={"/create_event/step_one"}
                      className="btn btn-primary"
                    >
                      Create Event
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-5xl font-bold">Connect your Community</div>
            <p className="py-6">
              Whether you're planning a fundraiser, social gathering, or
              community service event, our easy-to-use interface makes it simple
              to create and manage your events. Join us in strengthening our
              bonds, fostering community spirit, and making a positive impact
              together
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}
