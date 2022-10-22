import { useState } from "react";
import projects from "./projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  const [project, setProject] = useState(null);

  const showModal = (e) => {
    setProject(e);
  };

  return (
    <>
      <div className="container py-10 px-2 sm:px-5 md:px-10">
        <h2 className="page-title-headline flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {projects.map((projects) => (
            <div className="rounded-lg p-4 border-[2px] border-[#212425]">
              <div className="overflow-hidden rounded-lg" onClick={() => showModal(projects)}>
                <img className="w-full cursor-pointer transition duration-[5s] hover:scale-110 rounded-lg h-auto" src={projects.image} alt={projects.title} />
              </div>
              <span className="pt-5 text-[0.8rem] block text-[#A6A6A6]"> {projects.category} </span>
              <h2 className="text-[1.4rem] font-[500] duration-300 text-white mt-1"> {projects.title} </h2>
            </div>
          ))}
        </div>

        {project !== null && (
          <div className="fixed inset-0 flex z-[9999999] bg-[#0000008f] px-5">
            <div className="relative m-auto rounded-[10px] bg-[#323232]">
              <FontAwesomeIcon className="absolute top-[-2.2rem] right-[0rem] lg:top-[-4rem] text-white text-[2rem] lg:text-[3rem] duration-[800ms] hover:opacity-[0.4] cursor-pointer" icon={faXmarkCircle} onClick={() => setProject(null)} />
              <div className="modal p-6 lg:p-8 max-w-[800px] max-h-[600px] overflow-y-scroll">
                <h2 className="text-[2rem] font-[700] text-center text-white tracking-[1.2px]">{project.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                  <a className="flex gap-3 items-center" href={project.link} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon className="text-white text-[1.4rem]" icon={faArrowUpRightFromSquare} />
                    <p className="text-white text-[1.2rem] font-[500]"> Preview </p>
                  </a>
                </div>
                <p className="text-white text-[1rem] mt-5"> {project.description} </p>
                <img className="mt-5" src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
