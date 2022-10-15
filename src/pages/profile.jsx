import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <>
        <div class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
          <img src="https://bostamihtml.ibthemespro.com/images/about/avatar.jpg" class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="about" />
          <div class="pt-[100px] pb-8">
            <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Monalisa Ashley </h2>
            <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">Ui/Ux Designer </h3>
            <div class="flex justify-center space-x-3">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <span class="socialbtn text-[#1C9CEA]">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
            </div>

            <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
              <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </span>
                <div class="text-left ml-2.5">
                  <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                  <p class="dark:text-white">+123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
