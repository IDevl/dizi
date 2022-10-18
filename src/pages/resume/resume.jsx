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
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
  },
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
  },
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
  },
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
  },
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
  },
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
  },
];

export default function Resume() {
  return (
    <>
      <div class="container py-12 px-2 sm:px-5 md:px-10 lg:px-14 bg-black">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6">
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
    </>
  );
}
