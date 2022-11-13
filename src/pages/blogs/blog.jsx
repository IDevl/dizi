import { useEffect } from "react";
import { useParams } from "react-router-dom";
import blogs from "./blogs.json";

export default function Blog({ setModalImage }) {
  const slugify = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const { slug } = useParams();

  const currentBlog = blogs.find((blog) => slugify(blog.title) === slug);

  useEffect(() => {
    document.title = currentBlog.title + " | Jefferson Dela Cruz";
  }, [currentBlog]);

  return (
    <>
      {currentBlog && (
        <div className="container lg:pt-10 pb-10 px-2 sm:px-5 md:px-10">
          <h2 className="page-title-headline text-black dark:text-[white] md:items-center md:gap-7 text-[1.8rem] leading-[1.4] font-[600] mb-4">{currentBlog.title}</h2>

          {currentBlog.content.map((content) => (
            <p className="mt-3 text-[0.95rem] text-black dark:text-white leading-8">{content}</p>
          ))}

          {currentBlog.images && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-[2em]">
              {currentBlog.images.map((images) => (
                <div className="flex w-full shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]">
                  <img className="w-full" src={images} alt={images} />
                </div>
              ))}
            </div>
          )}
          {currentBlog.videos && (
            <div className="my-8 grid grid-cols-1 sm:grid-cols-1 gap-[2em]">
              {currentBlog.videos.map((videos) => (
                <div className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]">
                  <div id="blog-iframe-wrapper">
                    <iframe id="blog-iframe" width="560" height="349" src={videos} frameborder="0" allow="fullscreen;"></iframe>
                  </div>
                </div>
              ))}
            </div>
          )}

          {currentBlog.endnotes && currentBlog.endnotes.map((endnotes) => (
            <p className="mt-1 text-[0.95rem] text-black dark:text-white leading-8">{endnotes}</p>
          ))}

          <div className="mt-4 flex flex-col">
            <h3 className="font-[700] text-[0.95rem] text-black dark:text-white">References</h3>
            {currentBlog.references && currentBlog.references.map((references) => (
              <a className="mt-1 text-[0.95rem] text-black dark:text-white hover:text-[#F4C9A5] dark:hover:text-[#df0000] duration-[0.2s]" href={references} target="_blank" rel="noreferrer">{references}</a>
            ))}
          </div>
        </div>
      )}

      {!currentBlog && (
        <div className="container lg:pt-10 pb-10 px-2 sm:px-5 md:px-10">
          <h2 className="page-title-headline text-black dark:text-[white] md:items-center md:gap-7 text-[1.6rem] leading-[1.4] font-[600]"> Blog Not Found </h2>
        </div>
      )}
    </>
  );
}
