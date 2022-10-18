import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import profilepic from "../img/profile-pic.jpg";

export default function Profile() {
  return (
    <>
      <div class="w-full mb-6 lg:mb-0 mx-auto relative text-center bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <a href='./'>
          <img src={profilepic} class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] object-cover object-top" alt="Picture_Profile" />
        </a>
        <div class="pt-[100px] pb-8">
          <h2 class="mt-6 mb-1 text-[26px] font-semibold text-white"> Jefferson Dela Cruz </h2>
          <h3 class="mb-4 inline-block bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-[#A6A6A6]"> Web Developer </h3>
          <div class="flex justify-center space-x-3">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <span class="socialbtn text-[#1C9CEA]">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
          </div>

          <div class="p-7 rounded-2xl mt-7 bg-[#1D1D1D]">
            <div class="flex border-b border-[#E3E3E3] pb-2.5">
              <span class="socialbtn bg-white bg-black text-[#E93B81] shadow-md">
                <a href="tel: +639384571460" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </a>
              </span>
              <div class="text-left ml-2.5">
                <p class="text-xs text-[#A6A6A6]"> Phone </p>
                <p class="text-white">+63 938 4571 460</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
