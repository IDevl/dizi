import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn, faBehance } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton, faDownload, faEnvelope, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <>
      <div className="w-full flex flex-col items-center mb-6 lg:mb-0 mx-auto relative text-center bg-white dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <a className="-mt-[140px] w-fit" href="./">
          <img id="profile-container" src={process.env.PUBLIC_URL + "/img/about/profile-pic.png"} className="w-[240px] h-[240px] drop-shadow-xl mx-auto rounded-[20px] object-cover object-top" alt="Picture_Profile" />
        </a>
        <div className="pb-8 flex flex-col items-center">
          <h2 className="mt-6 mb-1 text-[26px] font-semibold text-black dark:text-white"> Jefferson Dela Cruz </h2>
          <h3 className="mb-3 inline-block bg-[#F3F6F6] dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-black dark:text-[#A6A6A6] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]"> Developer </h3>
          <div className="flex justify-center space-x-3">
            <a href="https://www.linkedin.com/in/jefferson-dc/" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </a>
            <a href="https://www.facebook.com/lNyep" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </a>
            <a href="https://www.behance.net/jeffdelacruz4" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faBehance} />
              </span>
            </a>
            <a href="https://twitter.com/jeppdc" target="_blank" rel="noreferrer">
              <span className="text-black dark:text-white bg-[#F3F6F6] dark:bg-[#1D1D1D] min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-t from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
          </div>

          <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)]">
            <div className="flex items-start border-b border-[#4c4c4c] pb-2.5">
              <a href="tel:+639384571460" target="_blank" rel="noreferrer" className="text-black dark:hover:text-white dark:text-[#E93B81] bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </a>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Phone </p>
                <p className="text-black dark:text-white text-[0.95rem]"> +63 938 4571 460 </p>
              </div>
            </div>
            <div className="flex items-start border-b border-[#4c4c4c] mt-5 pb-2.5">
              <a href="mailto: jbdelacruz411@gmail.com" target="_blank" rel="noreferrer" className="text-black dark:hover:text-white dark:text-[#2B98FF] bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Email </p>
                <p className="text-black dark:text-white text-[0.95rem]"> jbdelacruz411@gmail.com </p>
              </div>
            </div>
            <div className="flex items-start border-b border-[#4c4c4c] mt-5 pb-2.5">
              <a href="https://goo.gl/maps/2zehP7ehMnq4NUzz5" target="_blank" rel="noreferrer" className="text-black dark:text-[#F6FF2B] dark:hover:text-white bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faLocationDot} />
              </a>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Address </p>
                <p className="text-black dark:text-white text-[0.95rem]"> Santa Rosa, Laguna, Philippines </p>
              </div>
            </div>
            <div className="flex items-start border-b border-[#4c4c4c] mt-5 pb-2.5">
              <span className="text-black dark:text-[#A92BFF] dark:hover:text-white bg-[#F3F6F6] dark:bg-black min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center rounded hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#8d0000] to-[#550089] duration-300 shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Birthday </p>
                <p className="text-black dark:text-white text-[0.95rem]"> June 17, 2000 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center pb-8">
          <a href="https://drive.google.com/file/d/1vVdvDbu4gEVzSIj7LsGw_G7dLuy6Nu1H/view?usp=sharing" target="_blank" rel="noreferrer" download className="text-black dark:text-white text-[18px] bg-[#FCECDD] hover:bg-[#F4C9A5] dark:bg-gradient-to-l from-[#df0000] to-[#550089] px-5 py-3 rounded-lg bg-[length:100%_100%] hover:bg-[length:300%_100%] duration-[0.4s] shadow-[0_4px_4px_0px_rgba(0,0,0,0.2)] hover:shadow-none">
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </a>
        </div>
      </div>
    </>
  );
}
