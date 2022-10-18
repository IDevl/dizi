import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const education = [
  {
    year: "2018-2022",
    name: "BS Information Technology",
    location: "Polytechnic University of the Philippines",
  },
  {
    year: "2016-2018",
    name: "STEM",
    location: "STI College",
  },
];

const experiences = [
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
  },
];

export default function Resume() {
  return (
    <>
      <div class="container py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 class="page-title-headline flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7">Resume</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-10">
          <div>
            <div class="flex items-center space-x-3 mb-5">
              <FontAwesomeIcon class="text-[#df0000] max-h-[30px]" icon={faGraduationCap} />
              <h4 class="text-[1.6rem] text-white font-medium"> Education </h4>
            </div>
            {education.map((education) => (
              <div class="mt-5 bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg border-[#383838] border-[1px]">
                <span class="text-[1rem] text-[#b7b7b7]"> {education.year} </span>
                <h3 class="text-[1.25rem] text-white"> {education.name} </h3>
                <p class="text-[0.9rem] text-[#b7b7b7]"> {education.location} </p>
              </div>
            ))}
            ;
          </div>
          <div>
            <div class="flex items-center space-x-3 mb-5">
              <FontAwesomeIcon class="text-[#AF54D2] max-h-[30px]" icon={faBriefcase} />
              <h4 class="text-[1.6rem] text-white font-medium"> Experience </h4>
            </div>
            {experiences.map((experiences) => (
              <div class="mt-5 bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg border-[#383838] border-[1px]">
                <span class="text-[1rem] text-[#b7b7b7]"> {experiences.year} </span>
                <h3 class="text-[1.25rem] text-white"> {experiences.name} </h3>
                <p class="text-[0.9rem] text-[#b7b7b7]"> {experiences.location} </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div class="container bg-black py-12 px-2 sm:px-5 md:px-10 lg:px-20">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="col-span-1">
            <h4 class="text-[1.6rem] text-white font-medium mb-6"> Working Skills </h4>
            <div class="mb-5">
              <div class="flex justify-between mb-1">
                <span class=" font-semibold text-[#A6A6A6]">Web Design</span>
                <span class=" font-semibold text-[#A6A6A6]">65%</span>
              </div>
              <div class="w-full rounded-full h-1 bg-[#1c1c1c]">
                <div class="bg-[#FF6464] h-1 rounded-full w-[65%]"></div>
              </div>
            </div>
          </div>

          <div class="col-span-1">
            <h4 class="text-[1.6rem] text-white font-medium mb-8"> Knowledges </h4>
            <div class="flex gap-y-5 gap-x-2.5 flex-wrap">
              <button class="bg-[#1C1C1C] px-4 py-2 rounded-lg text-[#b7b7b7]">Digital Design</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
