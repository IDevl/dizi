import { useEffect, useState } from "react";
import projects from "./projects.json";
import classnames from "classnames";
import { motion } from "framer-motion";

export default function Projects({setProject}) {

  const [category, setCategory] = useState("Dev");

  useEffect(() => {
    document.title = "Projects | Jefferson Dela Cruz";
  }, []);

  return (
    <>
      <div className="container lg:pt-10 pb-10 px-2 sm:px-5 md:px-10">
        <h2 className="page-title-headline text-black dark:text-[white] flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7 after:bg-black dark:after:bg-gradient-to-l from-[#df0000] to-[#550089]">Projects</h2>
        <ul className="mt-8 flex w-full justify-start md:justify-end flex-wrap font-[500] text-white text-[0.85rem] sm:text-[1rem]">
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "Dev" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("Dev")}>
            {" "}
            All{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "Game Dev" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("Game Dev")}>
            {" "}
            Game{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "Website Dev" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("Website Dev")}>
            {" "}
            Website{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "Web Application Dev" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("Web Application Dev")}>
            {" "}
            Web Application{" "}
          </li>
        </ul>
        <motion.div className="flex flex-wrap gap-8 mt-8 min-h-[100vh]">
          {projects
            .filter((projects) => projects.category.includes(category))
            .map((projects) => (
              <motion.div transition={{ duration: 0.2 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="w-100 md:w-[47%] bg-white dark:bg-transparent p-6 border-[2px] border-white dark:border-[#212425] shadow-lg shadow-[#b7b7b7] dark:shadow-none rounded-lg">
                <div className="overflow-hidden shadow-xl" onClick={() => setProject(projects)}>
                  <img className="w-full cursor-pointer transition duration-[0.4s] hover:scale-110 h-auto" src={process.env.PUBLIC_URL + projects.image} alt={projects.title} />
                </div>
                <span className="pt-5 text-[0.85rem] block text-black dark:text-[#A6A6A6]"> {projects.category} </span>
                <h2 className="text-[1.5rem] font-[620] duration-300 text-black dark:text-white mt-1"> {projects.title} </h2>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  );
}
