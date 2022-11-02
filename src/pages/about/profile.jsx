import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faBehance } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton, faDownload, faEnvelope, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <>
      <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center bg-white dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <a href="./">
          <img src={process.env.PUBLIC_URL + "/img/about/profile-pic.jpg"} className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] object-cover object-top" alt="Picture_Profile" />
        </a>
        <div className="pt-[100px] pb-8">
          <h2 className="mt-6 mb-1 text-[26px] font-semibold text-black dark:text-white"> Jefferson Dela Cruz </h2>
          <h3 className="mb-3 inline-block bg-white dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-[#A6A6A6]"> Developer </h3>
          <div className="flex justify-center space-x-3">
            <a href="https://www.linkedin.com/in/jefferson-dc/" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </a>
            <a href="https://www.facebook.com/lNyep" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </a>
            <a href="https://www.behance.net/jeffdelacruz4" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faBehance} />
              </span>
            </a>
            <a href="https://twitter.com/jeppdc" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
          </div>

          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
            <div className="flex items-start border-b border-[#4c4c4c] pb-2.5">
              <a href="tel:+639384571460" target="_blank" rel="noreferrer" className="text-black dark:hover:text-white dark:text-[#E93B81] bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </a>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Phone </p>
                <p className="text-black dark:text-white text-[0.95rem]"> +63 938 4571 460 </p>
              </div>
            </div>
            <div className="flex items-start border-b border-[#4c4c4c] mt-5 pb-2.5">
              <a href="mailto: jbdelacruz411@gmail.com" className="text-black dark:hover:text-white dark:text-[#2B98FF] bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Email </p>
                <p className="text-black dark:text-white text-[0.95rem]"> jbdelacruz411@gmail.com </p>
              </div>
            </div>
            <div className="flex items-start border-b border-[#4c4c4c] mt-5 pb-2.5">
              <span className="text-black dark:text-[#F6FF2B] dark:hover:text-white bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Address </p>
                <p className="text-black dark:text-white text-[0.95rem]"> Santa Rosa, Laguna, Philippines </p>
              </div>
            </div>
            <div className="flex items-start border-b border-[#4c4c4c] mt-5 pb-2.5">
              <a href="https://www.funimada.com/assets/images/cards/big/link-2.gif" target="_blank" rel="noreferrer" className="text-black dark:text-[#A92BFF] dark:hover:text-white bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] shadow-md">
                <FontAwesomeIcon icon={faCalendarDays} />
              </a>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Birthday </p>
                <p className="text-black dark:text-white text-[0.95rem]"> June 17, 2000 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 flex justify-center pb-8">
          <a href="https://drive.google.com/file/d/1vVdvDbu4gEVzSIj7LsGw_G7dLuy6Nu1H/view?usp=sharing" target="_blank" rel="noreferrer" download className="text-black dark:text-white text-[18px] bg-[#FCECDD] hover:bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] px-5 py-3 rounded-xl bg-[length:100%_100%] hover:bg-[length:300%_100%] duration-[0.4s] shadow-xl">
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </a>
        </div>
      </div>
    </>
  );
}
