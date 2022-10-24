import Profile from "./profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import Cube from "./cube/cube";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import clients from "./clients.json";
import { useRef } from "react";

export default function About() {
  const slider = useRef();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <div className="pt-12 py-10 px-2 sm:px-5 md:px-10">
        <div className="lg:hidden">
          <Profile />
        </div>

        <h2 className="page-title-headline flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7">About Me</h2>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 pt-[30px] items-center">
          <div className="col-span-12 space-y-2.5">
            <p className="text-[#b3b3b3] leading-8 text-[1rem]"> Logical, solution-focused IT professional with 2 years of experienced in Web Development. An enthusiast in application and software development and design, and have the perseverance to expand in-depth knowledge and skills through developing real-world projects. </p>
          </div>
        </div>
      </div>

      <div className="px-2 sm:px-5 md:px-10">
        <h3 className="text-[2.2rem] text-white font-semibold pb-5"> What I do! </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="flex items-start gap-4 p-5 rounded-xl border-[1px] border-[#383838] bg-transparent">
            <FontAwesomeIcon className="text-[#00c4ff] text-[30px]" icon={faLaptop} />
            <div className="space-y-2">
              <h3 className="text-white text-[1.25rem] font-semibold"> Web Development </h3>
              <p className="leading-8 text-gray-lite text-[#A6A6A6] text-[0.9rem]"> Integrate, modify, and develop responsive ecommerce and company websites with WordPress and Shopify. </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 rounded-xl border-[1px] border-[#383838] bg-transparent">
            <FontAwesomeIcon className="text-[#AF54D2] text-[30px]" icon={faMobile} />
            <div className="space-y-2">
              <h3 className="text-white text-[1.25rem] font-semibold"> Mobile Development </h3>
              <p className="leading-8 text-gray-lite text-[#A6A6A6] text-[0.9rem]"> Knowledge of implementing user interfaces of mobile applications, primarily Flutter and React Native frameworks. </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl border-[1px] border-[#383838] bg-transparent">
            <FontAwesomeIcon className="text-[#ffd400] text-[35px]" icon={faUncharted} />
            <div className="space-y-2">
              <h3 className="text-white text-[1.25rem] font-semibold"> Game Development </h3>
              <p className="leading-8 text-gray-lite text-[#A6A6A6] text-[0.9rem]">
                {" "}
                Developed an educational android mobile game application for the learning of Grade Three students entitled{" "}
                <strong>
                  <a className="links" href="https://idevl.github.io/GosuKidWebsite/" target="_blank" rel="noreferrer">
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
        <div className="bg-[#0D0D0D] max-w-full h-auto pt-8 rounded-xl overflow-hidden">
          <h3 className="text-center text-[2.2rem] text-white font-semibold pb-3"> Clients </h3>
          <Slider ref={slider} className="mt-4" {...settings}>
            {clients.map((client) => (
              <div className="px-3 md:px-5" key={client.id}>
                <a className="flex items-center justify-center py-[1em]" href={client.link} target="_blank" rel="noreferrer">
                  <img src={client.src} alt={client.id} />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
