import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import profilepic from "./img/profilepic.jpg";

export default function About() {
  return (
    <>
      <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 class="page-title-headline">About Me</h2>

        <div class="lg:hidden">
          <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
            <img src={profilepic} class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] object-cover object-top" />
            <div class="pt-[100px] pb-8">
              <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Jefferson Dela Cruz </h2>
              <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"> Web Developer </h3>

              <div class="flex justify-center space-x-3">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <span class="socialbtn text-[#1C9CEA]">
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </a>
              </div>

              <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                  <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <a href="tel: +639384571460" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faMobileScreenButton} />
                    </a>
                  </span>
                  <div class="text-left ml-2.5">
                    <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                    <p class="dark:text-white">+63 938 4571 460</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
          <div class="col-span-12 space-y-2.5">
            <div class="lg:mr-16">
              <p class="text-[#b3b3b3] leading-7"> I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs. </p>
              <p class="text-[#b3b3b3] leading-7 mt-2.5"> My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies. </p>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 class="text-[35px] dark:text-white font-semibold pb-5"> What I do! </h3>
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div class="about-box bg-[#f3faff] dark:bg-transparent">
            <img class="w-10 h-10 object-contain block" src="https://bostamihtml.ibthemespro.com/images/icons/icon.svg" alt="icon" />
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold"> Web Development </h3>
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div class="about-box bg-[#f3faff] dark:bg-transparent">
            <img class="w-10 h-10 object-contain block" src="https://bostamihtml.ibthemespro.com/images/icons/icon.svg" alt="icon" />
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold"> Web Development </h3>
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div class="about-box bg-[#f3faff] dark:bg-transparent">
            <img class="w-10 h-10 object-contain block" src="https://bostamihtml.ibthemespro.com/images/icons/icon.svg" alt="icon" />
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold"> Web Development </h3>
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div class="about-box bg-[#f3faff] dark:bg-transparent">
            <img class="w-10 h-10 object-contain block" src="https://bostamihtml.ibthemespro.com/images/icons/icon.svg" alt="icon" />
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold"> Web Development </h3>
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div class="about-box bg-[#f3faff] dark:bg-transparent">
            <img class="w-10 h-10 object-contain block" src="https://bostamihtml.ibthemespro.com/images/icons/icon.svg" alt="icon" />
            <div class="space-y-2">
              <h3 class="dark:text-white text-[22px] font-semibold"> Web Development </h3>
              <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
