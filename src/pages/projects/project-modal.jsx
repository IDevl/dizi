import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faFileLines, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function ProjectModal({project, unsetProject}) {
    
  return (
    <div className="fixed inset-0 flex justify-center z-[99999999] bg-[#0000008f] px-5 py-20">
      <div className="relative m-auto rounded-[10px] bg-[#323232] py-6 pr-3 w-auto">
        <FontAwesomeIcon className="absolute top-[-2.4rem] right-[0rem] lg:top-[-4rem] text-white text-[2rem] lg:text-[3rem] duration-[400ms] hover:opacity-[0.6] cursor-pointer" icon={faXmarkCircle} onClick={() => unsetProject()} />
        <div className="modal p-4 sm:p-5 max-w-[800px] max-h-[600px] overflow-y-scroll">
          <h2 className="text-[2rem] font-[800] text-center text-white brightness-[1.2] leading-[1.2]">{project.title}</h2>
          <div className="gap-8 mt-8">
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
          <div className="flex gap-2.5 flex-wrap mt-6 mb-10">
            {project.skills.map((skills) => (
              <button className="border-[1px] border-[#bdbdbd] hover:border-[#9d00ff] hover:bg-[#9d00ff] text-[0.9rem] font-[500] text-white px-4 py-1.5 rounded-2xl duration-500 drop-shadow-md">{skills}</button>
            ))}
          </div>

          <div className="my-10 overflow-hidden rounded-[20px] flex">
            <img className="w-100 rounded-[20px]" src={process.env.PUBLIC_URL + project.image} alt={project.title} />
          </div>
          <div className="mb-2 flex items-center justify-center w-100">
            <a className="bg-[#1C1C1C] hover:bg-white text-white hover:text-[#1C1C1C] text-[1.2rem] font-[500] px-6 py-2 duration-500 drop-shadow-md" href={project.link} target="_blank" rel="noreferrer">
              {" "}
              Preview{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
