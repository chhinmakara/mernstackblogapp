import { Link } from "react-router";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" classname="rounded-2xl object-cover" />
      </div>
      {/* detail */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          magnam accusamus.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Writen by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quos blanditiis voluptatem sunt eius veritatis iusto ducimus nulla
          dicta? At corrupti quaerat illo ratione laudantium numquam aut odit
          error! Aperiam.
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
