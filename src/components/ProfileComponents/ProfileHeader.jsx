import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import outward from "../../../public/Outward.png";
import mono from "../../../public/Mono.png";
import espinosa from "../../../public/Espinosa.png";

export default function ProfileHeader() {
  const { user } = useContext(UserContext);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <a
          href="/"
          aria-label="View"
          className="inline-block mb-5 rounded-full sm:mx-auto"
        >
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
        </a>
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Welcome to your profile <span>{user && user.username}</span>
        </h2>
        <p className="text-base text-gray-700 md:text-lg sm:px-4">
          Your tailored database playground! Craft, shape, and explore
          components for your creative endeavors.
        </p>
        <hr className="w-full my-8 border-gray-300" />
      </div>
      <div className="flex items-center justify-center -mx-4 lg:pl-8 max-w-screen-2xl">
        <div className="flex flex-col items-end px-3">
          <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://uploads-ssl.webflow.com/5ea7fd4e3d52ef73804bc877/63f1a05c700f68cb033a3f0c_Screenshot-min.png"
            alt=""
          />
          <img
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src={mono}
            alt=""
          />
        </div>
        <div className="px-3">
          <img
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
            src="https://images.unsplash.com/photo-1705402423534-108c8312d1e5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="flex flex-col items-end px-3">
          <img
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://assets.awwwards.com/awards/media/cache/thumb_880_660/submissions/2024/01/659f1579b7437829657695.jpg"
            alt=""
          />
          <img
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src={espinosa}
            alt=""
          />
        </div>
        <div className="flex flex-col items-start px-3">
          <img
            className="object-cover mb-6 w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="https://assets.awwwards.com/awards/media/cache/thumb_440_330/submissions/2024/01/659fe2ee486e1517993157.jpg"
            alt=""
          />
          <img
            className="object-cover rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src={outward}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}