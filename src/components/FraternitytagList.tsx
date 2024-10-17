import Link from "next/link";
import deltalogo from "/public/deltalogo.png";
import kappalogo from "/public/kappalogo.png";
import iotalogo from "/public/iotalogo.png";
import sigmalogo from "/public/sigmalogo.png";
import omegalogo from "/public/omegalogo.png";
import zetalogo from "/public/zetalogo.png";
import gammalogo from "/public/gammalogo.png";
import akalogo from "/public/akalogo.png";
import alphalogo from "/public/alphalogo.png";
import d9 from "/public/d9.jpg";

export default function FraternityTagList() {
  return (
    <>
      <div className="drawer drawer-end flex justify-center z-0">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="hero bg-base-100">
            <div className="hero-content flex-col-reverse">
              <div className="flex flex-col md:flex-row md:w-full md:justify-around">
                <div className="card bg-base-100 image-full w-96 shadow-xl">
                  <figure>
                    <img src={d9.src} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Event Categories</h2>
                    <p>
                      Events for the whole community. Choose from Social events,
                      classes, politics and more!
                    </p>
                    <div className="card-actions justify-center">
                      <label htmlFor="my-drawer-4" className="drawer-button">
                        <div className="btn btn-wide">View Categories</div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div>Divine Nine Organizations</div>
            <li className="flex-row">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Alpha Phi Alpha`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={alphalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΑΦΑ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Alpha Kappa Alpha`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={akalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΑΚΑ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Kappa Alpha Psi`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={kappalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΚΑΨ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Omega Psi Phi`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={omegalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΩΨΦ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Delta Sigma Theta`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={deltalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΔΣΘ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Phi Beta Sigma`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={sigmalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΦΒΣ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Zeta Phi Beta`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={zetalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΖΦΒ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Sigma Gamma Rho`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={gammalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΣΓΡ
                  </div>
                </Link>
              </div>
            </li>
            <li className="flex-col">
              <div className="avatar m-3 mx-5 flex-col">
                <Link
                  href={`/events?tag=Iota Phi Theta`}
                  className="p-5 hover:bg-base-200 border-2 w-20 rounded-full ring-offset-2"
                >
                  <img src={iotalogo.src} alt="" />
                  <div className=" text-center text-sm md:text-base font-semibold">
                    ΙΦΘ
                  </div>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
