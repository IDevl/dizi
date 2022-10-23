import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const education = [
  {
    year: "2018-2022",
    name: "BS Information Technology",
    location: "Polytechnic University of the Philippines",
    description: ['Lead, design, and developed an educational android game application entitled "Gosu Kid" for the learning of Grade Three students.', "Facilitates academic and development collaboration with colleagues in project-making", "Graduated Cum Laude."],
  },
  {
    year: "2016-2018",
    name: "STEM Strand",
    location: "Systems Technology Institute College",
    description: ["Pursue a degree focusing on mathematics and engineering.", "Gain the foundational knowledge to solve real-world problems and keep up with technological advancements in fields of Information technology, engineering, and medicine."],
  },
];

const experiences = [
  {
    year: "2021-2022",
    name: "Web Development",
    location: "Exceed Digital Solutions",
    description: ["Integrated, modified, and developed responsive ecommerce and company websites with WordPress and Shopify.", "Coordinates with the team to resolve conflicts, prioritize needs and develop content criteria of a website."],
  },
  {
    year: "2021-2022",
    name: "Internship",
    location: "Exceed Digital Solutions",
    description: ["Practiced of scripting languages, primarily Javascript frameworks.", "Trained to use management tools, content creation tools, applications, and digital media.", "Developed and validates test routines and schedules to ensure that test cases mimic external interfaces and address all browser and device types."],
  },
];

const skills = [
  {
    name: "Web Development",
    percentage: "92%",
    style: {
      backgroundColor: "#a92bff",
      width: "92%",
    },
  },
  {
    name: "Web Design",
    percentage: "86%",
    style: {
      backgroundColor: "#2b98ff",
      width: "86%",
    },
  },
  {
    name: "Problem Solving",
    percentage: "87%",
    style: {
      backgroundColor: "#2bff7c",
      width: "87%",
    },
  },
  {
    name: "Consistency",
    percentage: "93%",
    style: {
      backgroundColor: "#f6ff2b",
      width: "93%",
    },
  },
  {
    name: "Leadership",
    percentage: "88%",
    style: {
      backgroundColor: "#ff2b2b",
      width: "88%",
    },
  },
];

const knowledges = ["WordPress", "Shopify", "InMotion", "HTML", "CSS", "Javascript", "PHP", "ReactJS", "NodeJS", "MongoDB", "Unity 2D", "C#", "Firebase", "Git", "Java", "C++", "Python", "mySQL", "MS Office", "Asana"];

export default function Resume() {
  useEffect(() => {
    document.title = 'Resume | Jefferson Dela Cruz';
  }, []);
  return (
    <>
      <div className="container py-10 px-2 sm:px-5 md:px-10">
        <h2 className="page-title-headline flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7">Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <FontAwesomeIcon className="text-[#AF54D2] text-[30px]" icon={faGraduationCap} />
              <h4 className="text-[1.6rem] text-white font-[500]"> Education </h4>
            </div>
            {education.map((education) => (
              <div className="mt-5 bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg border-[#383838] border-[1px]">
                <span className="text-[1rem] text-[#b7b7b7]"> {education.year} </span>
                <h3 className="text-[1.35rem] text-white font-semibold tracking-[1.2px] leading-8"> {education.name} </h3>
                <p className="text-[0.95rem] text-white"> {education.location} </p>
                {education.description.map((description) => (
                  <p className="text-[0.8rem] text-[#b7b7b7]"> &#x2022; {description} </p>
                ))}
              </div>
            ))}
            ;
          </div>
          <div>
            <div className="flex items-center space-x-3 mb-5">
              <FontAwesomeIcon className="text-[#AF54D2] text-[30px]" icon={faBriefcase} />
              <h4 className="text-[1.6rem] text-white font-[500]"> Experience </h4>
            </div>
            {experiences.map((experiences) => (
              <div className="mt-5 bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg border-[#383838] border-[1px]">
                <span className="text-[1rem] text-[#b7b7b7]"> {experiences.year} </span>
                <h3 className="text-[1.35rem] text-white font-semibold tracking-[1.2px] leading-8"> {experiences.name} </h3>
                <p className="text-[0.95rem] text-white"> {experiences.location} </p>
                {experiences.description.map((description) => (
                  <p className="text-[0.8rem] text-[#b7b7b7]"> &#x2022; {description} </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container bg-black py-12 px-2 sm:px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-span-1">
            <h4 className="text-[1.6rem] text-white font-[500] mb-8"> Working Skills </h4>

            {skills.map((skills) => (
              <div className="mb-5">
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-[#A6A6A6]"> {skills.name} </span>
                  <span className="font-semibold text-[#A6A6A6]"> {skills.percentage} </span>
                </div>
                <div className="w-full rounded-full h-1 bg-[#1c1c1c] mt-[10px]">
                  <div className="h-1 rounded" style={skills.style}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-1">
            <h4 className="text-[1.6rem] text-white font-[500] mb-8"> Knowledges </h4>
            <div className="flex gap-2.5 flex-wrap">
              {knowledges.map((knowledges) => (
                <button className="bg-[#1C1C1C] hover:bg-[#9d00ff] text-[#b7b7b7] text-[0.9rem] font-[500] hover:text-white px-3 py-2 rounded-lg duration-500">{knowledges}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
