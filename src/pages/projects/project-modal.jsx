import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faFileLines, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ProjectModal({ project, unsetProject }) {
  return (
    <div className="fixed inset-0 flex justify-center z-[99999999] bg-[#000000c2] px-5 py-20">
      <div className="max-w-[700px] relative m-auto rounded-[10px] bg-white dark:bg-[#323232] py-6 pr-3 w-auto">
        <FontAwesomeIcon className="absolute top-[-2.4rem] right-[0rem] lg:top-[-4rem] text-white text-[2rem] lg:text-[3rem] duration-[400ms] hover:opacity-[0.6] cursor-pointer" icon={faXmarkCircle} onClick={() => unsetProject()} />
        <div className="modal p-5 sm:p-8 max-w-[800px] max-h-[600px] overflow-y-scroll">
          <h2 className="text-[2rem] font-[800] text-center text-black dark:text-white brightness-[1.2] leading-[1.2]">{project.title}</h2>
          <div className="gap-8 mt-8">
            <div className="flex gap-2.5 items-center">
              <FontAwesomeIcon className="text-black dark:text-white text-[1.4rem]" icon={faFileLines} />
              <p className="text-black dark:text-white text-[1rem] font-[400]">
                <span className="font-[600]">{project.category} </span>
              </p>
            </div>
          </div>

          <p className="text-black dark:text-white text-[1rem] mt-5 leading-[2]"> {project.description} </p>

          <div className="flex gap-2.5 items-center mt-6">
            <FontAwesomeIcon className="text-black dark:text-white text-[1.4rem]" icon={faMagnifyingGlass} />
            <p className="text-black dark:text-white text-[1rem] font-[400]">
              <span className="font-[600]">Knowledges </span>
            </p>
          </div>
          <div className="flex gap-2.5 flex-wrap mt-6 mb-10">
            {project.skills.map((skills) => (
              <button className="border-[1px] border-black hover:border-[#F4C9A5] dark:border-[#bdbdbd] dark:hover:border-[#9d00ff] hover:bg-[#F4C9A5] dark:hover:bg-[#9d00ff] text-[0.9rem] font-[500] text-black dark:text-white px-4 py-1.5 rounded-2xl duration-500 shadow-lg">{skills}</button>
            ))}
          </div>

          <div className="relative my-10 overflow-hidden rounded-[20px] flex items-center justify-center">
            <img className="w-100 rounded-[20px]" src={process.env.PUBLIC_URL + project.image} alt={project.title} />
            <div className="opacity-0 hover:opacity-100 duration-[0.4s] absolute inset-0 flex items-center justify-center w-100 bg-[#000000c2]">
              <a className="bg-white hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] text-black dark:hover:text-white text-[1.1rem] font-[600] px-6 py-2 duration-500 drop-shadow-md rounded-xl" href={project.link} target="_blank" rel="noreferrer">
                {" "}
                View Project{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
