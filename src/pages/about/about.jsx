import Profile from "./profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import Cube from "./cube/cube";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import stack from "./stack.json";
import { useRef } from "react";

export default function About() {
  const slider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current) => {
      const slideElement = slider.current.innerSlider.list.querySelector(`[data-index="${current}"]`);
      slideElement.classList.add("slide-active");
    },
  };

  useEffect(() => {
    document.title = "About | Jefferson Dela Cruz";
  }, []);

  return (
    <>
      <div className="lg:pt-10 pb-10 px-2 sm:px-5 md:px-10">
        <div className="lg:hidden">
          <Profile />
        </div>

        <h2 className="page-title-headline text-black dark:text-[white] flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7 after:bg-black dark:after:bg-gradient-to-l from-[#df0000] to-[#550089]">About Me</h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 pt-[30px] items-center">
          <div className="col-span-12 space-y-2.5">
            <p className="text-black dark:text-[#b3b3b3] leading-8 text-[1rem]">
              {" "}
              Logical, solution-focused IT graduate with almost two years of experience in Web Development. An enthusiast in application and software development and currently looking for a new developer role to expand in-depth knowledge and skills in programming and development through developing real-world projects in the field of Information Technology.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-5 md:px-10">
        <h3 className="text-[2.2rem] text-black dark:text-white font-semibold pb-5"> What I do! </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="flex items-start gap-4 p-5 rounded-xl border-[1px] border-[#F3F6F6] dark:border-[#383838] bg-[#F3F6F6] dark:bg-transparent shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]">
            <FontAwesomeIcon className="text-[#F4C9A5] dark:text-[#00c4ff] text-[30px]" icon={faLaptop} />
            <div className="space-y-2">
              <h3 className="text-black dark:text-white text-[1.25rem] font-semibold"> Web Development </h3>
              <p className="leading-8 text-black dark:text-[#b3b3b3] text-[0.9rem]"> Integrate, modify, and develop responsive ecommerce and company websites with WordPress and Shopify. </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl border-[1px] border-[#F3F6F6] dark:border-[#383838] bg-[#F3F6F6] dark:bg-transparent shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]">
            <FontAwesomeIcon className="text-[#F4C9A5] dark:text-[#AF54D2] text-[30px]" icon={faMobile} />
            <div className="space-y-2">
              <h3 className="text-black dark:text-white text-[1.25rem] font-semibold"> Mobile Development </h3>
              <p className="leading-8 text-black dark:text-[#b3b3b3] text-[0.9rem]"> Knowledge of implementing user interfaces of mobile applications, primarily Flutter and React Native frameworks. </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl border-[1px] border-[#F3F6F6] dark:border-[#383838] bg-[#F3F6F6] dark:bg-transparent shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]">
            <FontAwesomeIcon className="text-[#F4C9A5] dark:text-[#ffd400] text-[35px]" icon={faUncharted} />
            <div className="space-y-2">
              <h3 className="text-black dark:text-white text-[1.25rem] font-semibold"> Game Development </h3>
              <p className="leading-8 text-black dark:text-[#b3b3b3] text-[0.9rem]">
                {" "}
                Developed an educational android mobile game application for the learning of Grade Three students entitled{" "}
                <strong>
                  <a className="dark:links" href="https://idevl.github.io/GosuKidWebsite/" target="_blank" rel="noreferrer">
                    Gosu Kid
                  </a>
                </strong>
                .{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Cube />

      <div className="px-2 sm:px-5 md:px-10 lg:px-14 my-8">
        <div className="bg-[#F3F6F6] dark:bg-[#0D0D0D] max-w-full h-auto pt-8 rounded-xl overflow-hidden shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]">
          <h3 className="text-center text-[2.2rem] text-black dark:text-white font-semibold pb-3"> Stack </h3>
          <Slider ref={slider} className="my-4" {...settings}>
            {stack.map((stack) => (
              <div className="px-3 md:px-5" key={stack.id}>
                <a className="flex items-center justify-center py-[1em]" target="_blank" rel="noreferrer">
                  <img
                    src={stack.src}
                    alt={stack.id}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "https://picsum.photos/100/100";
                    }}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
