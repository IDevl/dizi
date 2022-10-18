import Profile from "./profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faUncharted } from "@fortawesome/free-brands-svg-icons";
import Cube from "./cube/cube";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function About() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    cssEase: 'linear',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  }

  const clients = [
    {
      name: "WrapUp PH",
      src: "https://staging.wrapup.ph/wp-content/uploads/2022/10/Wrap-Up-Logo.png",
    },
    {
      name: "WrapUp PH",
      src: "https://fiestaextravaganza.com/wp-content/uploads/2022/10/VFE-2022-logo-1.png",
    },
    {
      name: "WrapUp PH",
      src: "https://staging.wrapup.ph/wp-content/uploads/2022/10/Wrap-Up-Logo.png",
    },
    {
      name: "WrapUp PH",
      src: "https://fiestaextravaganza.com/wp-content/uploads/2022/10/VFE-2022-logo-1.png",
    },
    {
      name: "WrapUp PH",
      src: "https://staging.wrapup.ph/wp-content/uploads/2022/10/Wrap-Up-Logo.png",
    },
    {
      name: "WrapUp PH",
      src: "https://fiestaextravaganza.com/wp-content/uploads/2022/10/VFE-2022-logo-1.png",
    },
  ];

  console.log(settings);

  return (
    <>
      <div class="pt-12 py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <div class="lg:hidden">
          <Profile />
        </div>

        <h2 class="page-title-headline flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7">About Me</h2>
        <div class="lg:grid grid-cols-12 md:gap-10 pt-4 pt-[30px] items-center">
          <div class="col-span-12 space-y-2.5">
            <div class="mr-0 text-[0.9rem]">
              <p class="text-[#b3b3b3] leading-7"> I am a BS Information Technology graduate from the Polytechnic University of the Philippines and a Web Developer at Exceed Digital Solutions. </p>
              <p class="text-[#b3b3b3] leading-7 mt-2.5"> I am an enthusiast in application and software development and has the perseverance to expand his knowledge and skills through creating real-world projects. I also have an aspiration to attain more comprehensive experiences in the field of Information Technology. </p>
            </div>
          </div>
        </div>
      </div>

      <div class="px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 class="text-[2.2rem] text-white font-semibold pb-5"> What I do! </h3>
        <div class="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div class="flex items-start gap-4 p-6 rounded-xl border-[1px] border-[#383838] bg-transparent">
            <FontAwesomeIcon class="text-[#00c4ff] max-h-[35px]" icon={faLaptop} />
            <div class="space-y-2">
              <h3 class="text-white text-[1.25rem] font-semibold"> Web Development </h3>
              <p class="leading-8 text-gray-lite text-[#A6A6A6] text-[0.9rem]"> Lorem Ipsum </p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-6 rounded-xl border-[1px] border-[#383838] bg-transparent">
            <FontAwesomeIcon class="text-[#AF54D2] max-h-[35px]" icon={faMobile} />
            <div class="space-y-2">
              <h3 class="text-white text-[1.25rem] font-semibold"> Mobile Development </h3>
              <p class="leading-8 text-gray-lite text-[#A6A6A6] text-[0.9rem]"> Lorem Ipsum </p>
            </div>
          </div>
          <div class="flex items-start gap-4 p-6 rounded-xl border-[1px] border-[#383838] bg-transparent">
            <FontAwesomeIcon class="text-[#ffd400] max-h-[35px]" icon={faUncharted} />
            <div class="space-y-2">
              <h3 class="text-white text-[1.25rem] font-semibold"> Software Development </h3>
              <p class="leading-8 text-gray-lite text-[#A6A6A6] text-[0.9rem]"> Lorem Ipsum </p>
            </div>
          </div>
        </div>
      </div>

      <Cube />

      <div class="px-2 sm:px-5 md:px-10 lg:px-14 my-8">
        <div class="bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
          <h3 class="text-center text-[2.2rem] text-white font-semibold pb-5"> Clients </h3>
          <Slider className="mt-4" {...settings}>
            {clients.map((client) => (
              <div class="px-5" key={client.id}>
                <img src={client.src} alt={client.name} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
