import { useEffect, useState } from "react";
import projects from "./projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faFileLines, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import { motion } from "framer-motion";

export default function Projects() {
  const [project, setProject] = useState(null);
  const [category, setCategory] = useState("Dev");

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [project]);

  useEffect(() => {
    document.title = "Projects | Jefferson Dela Cruz";
  }, []);

  return (
    <>
      <div className="container py-10 px-2 sm:px-5 md:px-10">
        <h2 className="page-title-headline flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7">Projects</h2>
        <ul className="mt-8 flex w-full justify-start md:justify-end flex-wrap font-[500] text-white text-[0.85rem] sm:text-[1rem]">
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s]", category === "Dev" && "text-[#bf58ff]")} onClick={() => setCategory("Dev")}>
            {" "}
            All{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s]", category === "Game Dev" && "text-[#bf58ff]")} onClick={() => setCategory("Game Dev")}>
            {" "}
            Game{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s]", category === "Website Dev" && "text-[#bf58ff]")} onClick={() => setCategory("Website Dev")}>
            {" "}
            Website{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s]", category === "Web Application Dev" && "text-[#bf58ff]")} onClick={() => setCategory("Web Application Dev")}>
            {" "}
            Web Application{" "}
          </li>
        </ul>
        <motion.div className="grid items-start grid-cols-1 sm:grid-cols-2 gap-8 mt-8 min-h-[100vh]">
          {projects
            .filter((projects) => projects.category.includes(category))
            .map((projects) => (
              <motion.div transition={{ duration: 1 }} animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0 }} exit={{ opacity: 0, scale: 0 }} className="rounded-lg p-6 border-[2px] border-[#212425]">
                <div className="overflow-hidden rounded-lg" onClick={() => setProject(projects)}>
                  <img className="w-full cursor-pointer transition duration-[0.4s] hover:scale-110 rounded-lg h-auto" src={process.env.PUBLIC_URL + projects.image} alt={projects.title} />
                </div>
                <span className="pt-5 text-[0.8rem] block text-[#A6A6A6]"> {projects.category} </span>
                <h2 className="text-[1.4rem] font-[500] duration-300 text-white mt-1"> {projects.title} </h2>
              </motion.div>
            ))}
        </motion.div>

        {project !== null && (
          <div className="fixed inset-0 flex justify-center z-[9999999] bg-[#0000008f] px-5 py-20">
            <div className="relative m-auto rounded-[10px] bg-[#323232] p-3 sm:p-5 w-auto">
              <FontAwesomeIcon className="absolute top-[-2.4rem] right-[0rem] lg:top-[-4rem] text-white text-[2rem] lg:text-[3rem] duration-[800ms] hover:opacity-[0.4] cursor-pointer" icon={faXmarkCircle} onClick={() => setProject(null)} />
              <div className="modal p-3 sm:p-5 max-w-[800px] max-h-[600px] overflow-y-scroll">
                <h2 className="text-[2rem] font-[800] text-center links brightness-[1.2] leading-[1.2]">{project.title}</h2>
                <div className="gap-8 mt-6">
                  <div className="flex gap-2.5 items-center">
                    <FontAwesomeIcon className="text-white text-[1.4rem]" icon={faFileLines} />
                    <p className="text-white text-[1rem] font-[400]">
                      <span className="font-[600]">{project.category} </span>
                    </p>
                  </div>
                </div>

                <p className="text-white text-[1rem] mt-5 leading-[2]"> {project.description} </p>

                <div className="flex gap-2.5 items-center mt-6">
                  <FontAwesomeIcon className="text-white text-[1.4rem]" icon={faMagnifyingGlass} />
                  <p className="text-white text-[1rem] font-[400]">
                    <span className="font-[600]">Knowledges </span>
                  </p>
                </div>
                <div className="flex gap-2.5 flex-wrap mt-4 mb-10">
                  {project.skills.map((skills) => (
                    <button className="border-[1px] border-[#bdbdbd] hover:border-[#9d00ff] hover:bg-[#9d00ff] text-[0.9rem] font-[500] text-white px-4 py-1.5 rounded-2xl duration-500 drop-shadow-md">{skills}</button>
                  ))}
                </div>

                <div className="my-10 overflow-hidden rounded-[20px] flex">
                  <img className="w-100 rounded-[20px] hover:scale-[1.4] duration-[6s]" src={process.env.PUBLIC_URL + project.image} alt={project.title} />
                </div>
                <div className="mb-8 flex items-center justify-center w-100">
                  <a className="bg-[#1C1C1C] hover:bg-[#9d00ff] text-[1.2rem] font-[500] text-white px-6 py-2 duration-500 drop-shadow-md" href={project.link} target="_blank" rel="noreferrer">
                    {" "}
                    Preview{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
