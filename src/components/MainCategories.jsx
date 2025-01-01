import { Link } from "react-router";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white p-4 rounded-3xl xl:rounded-full shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white px-4 py-2 rounded-full"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 px-4 py-2 rounded-full"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <div className="bg-gray-100 p-2 gap-2 rounded-full flex items-center">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
        <input
          type="text"
          placeholder="Search a post ..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
