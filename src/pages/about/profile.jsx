import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreenButton, faDownload, faEnvelope, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function Profile() {
  return (
    <>
      <div className="w-full mb-6 lg:mb-0 mx-auto relative text-center bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <a href="./">
          <img src={process.env.PUBLIC_URL + "/img/about/profile-pic.jpg"} className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px] object-cover object-top" alt="Picture_Profile" />
        </a>
        <div className="pt-[100px] pb-8">
          <h2 className="mt-6 mb-1 text-[26px] font-semibold text-white"> Jefferson Dela Cruz </h2>
          <h3 className="mb-4 inline-block bg-[#1D1D1D] px-5 py-1.5 rounded-lg text-[#A6A6A6]"> Web Developer </h3>
          <div className="flex justify-center space-x-3">
            <a href="https://www.linkedin.com/in/jefferson-dc/" target="_blank" rel="noreferrer">
              <span className="socialbtn text-[#0B65C3]">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </a>
            <a href="https://www.facebook.com/lNyep" target="_blank" rel="noreferrer">
              <span className="socialbtn text-[#1298F6]">
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
            </a>
            <a href="https://twitter.com/jeppdc" target="_blank" rel="noreferrer">
              <span className="socialbtn text-[#1D9BF0]">
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>
          </div>

          <div className="p-7 rounded-2xl mt-7 bg-[#1D1D1D]">
            <div className="flex border-b border-[#4c4c4c] pb-2.5">
              <span className="socialbtn bg-white bg-black text-[#E93B81] shadow-md">
                <a href="tel:+639384571460" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faMobileScreenButton} />
                </a>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Phone </p>
                <p className="text-white text-[0.95rem]"> +63 938 4571 460 </p>
              </div>
            </div>
            <div className="flex border-b border-[#4c4c4c] mt-5 pb-2.5">
              <span className="socialbtn bg-white bg-black text-[#2B98FF] shadow-md">
                <a href="mailto: jbdelacruz411@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Email </p>
                <p className="text-white text-[0.95rem]"> jbdelacruz411@gmail.com </p>
              </div>
            </div>
            <div className="flex border-b border-[#4c4c4c] mt-5 pb-2.5">
              <span className="socialbtn bg-white bg-black text-[#F6FF2B] shadow-md">
                <a href="https://goo.gl/maps/qQ3wKYrkCmjf2NW79" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLocationDot} />
                </a>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Address </p>
                <p className="text-white text-[0.95rem]"> Santa Rosa, Laguna, Philippines </p>
              </div>
            </div>
            <div className="flex border-b border-[#4c4c4c] mt-5 pb-2.5">
              <span className="socialbtn bg-white bg-black text-[#A92BFF] shadow-md">
                <a href="https://www.funimada.com/assets/images/cards/big/link-2.gif" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faCalendarDays} />
                </a>
              </span>
              <div className="text-left ml-2.5">
                <p className="text-xs text-[#A6A6A6]"> Birthday </p>
                <p className="text-white text-[0.95rem]"> June 17, 2000 </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 flex justify-center pb-8">
          <a href="https://drive.google.com/file/d/1vVdvDbu4gEVzSIj7LsGw_G7dLuy6Nu1H/view?usp=sharing" target="_blank" rel="noreferrer" download className="text-white text-[18px] bg-gradient-to-l from-[#df0000] to-[#550089] px-5 py-3 rounded-xl bg-[length:100%_100%] hover:bg-[length:300%_100%] duration-[0.4s]">
            <FontAwesomeIcon icon={faDownload} /> Download CV
          </a>
        </div>
      </div>
    </>
  );
}
