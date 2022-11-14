import { useEffect } from "react";
import blogs from "./blogs.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

export default function Blogs() {
  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  useEffect(() => {
    document.title = "Blogs | Jefferson Dela Cruz";
  }, []);

  return (
    <>
      <div className="container lg:pt-10 pb-10 px-2 sm:px-5 md:px-10">
        <h2 className="page-title-headline text-black dark:text-[white] flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7 after:bg-black dark:after:bg-gradient-to-l from-[#df0000] to-[#550089]">Blogs</h2>
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 767: 2 }}>
          <Masonry gutter="2rem" className="mt-14 min-h-[100vh]">
            {blogs.map((blogs, index) => (
              <div key={index} className="grid-item w-full bg-[#F3F6F6] dark:bg-transparent p-6 border-[2px] border-[#F3F6F6] dark:border-[#212425] rounded-lg shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] duration-300">
                <div className="overflow-hidden">
                  <img className="w-full h-auto mt-1" src={blogs.featuredImage} alt={blogs.featuredImage} />
                </div>
                <h2 className="text-[1.2rem] font-[620] duration-300 text-black dark:text-white mt-4"> {blogs.title} </h2>
                <p className="text-[0.95rem] text-black dark:text-white mt-2 mb-1">{blogs.content[0].substring(0, 110)} . . .</p>
                <Link className="text-[0.9rem] font-[600] text-black dark:text-white hover:text-[#F4C9A5] dark:hover:text-[#df0000] duration-[0.2s]" to={"./" + slugify(blogs.title)}>
                  Read More
                </Link>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
