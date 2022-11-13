import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle, faFileLines, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Modal({ modalData, unsetModalData, setModalImage }) {
  const handleClickOutside = (e) => {
    const outerDiv = document.getElementById("outer-div");
    if (e.target === outerDiv) {
      unsetModalData();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const outerDiv = document.getElementById("image-outer-div");
      if (e.key === "Escape") {
        if (!outerDiv) {
          unsetModalData();
        }
      }
    });
  });

  return (
    <div id="outer-div" className="fixed inset-0 flex justify-center z-[99999999] bg-[#000000c2] px-5 py-20 overflow-y-auto" onClick={(e) => handleClickOutside(e)}>
      <div className="max-w-[700px] relative m-auto rounded-[10px] bg-white dark:bg-[#323232] py-6 pr-3 w-auto">
        <FontAwesomeIcon className="absolute top-[-2.4rem] right-[0rem] lg:top-[-4rem] text-white text-[2rem] lg:text-[3rem] duration-[400ms] hover:opacity-[0.6] cursor-pointer" icon={faXmarkCircle} onClick={() => unsetModalData()} />
        <div className="modal p-5 sm:p-8 max-w-[800px] max-h-[600px] overflow-y-scroll">
          <h2 className="text-[2rem] font-[800] text-center text-black dark:text-white brightness-[1.2] leading-[1.2]">{modalData.title}</h2>
          <div className="gap-8 mt-8">
            <div className="flex gap-2.5 items-center">
              <FontAwesomeIcon className="text-black dark:text-white text-[1.4rem]" icon={faFileLines} />
              <p className="text-black dark:text-white text-[1rem] font-[400]">
                <span className="font-[600]">{modalData.category} </span>
              </p>
            </div>
          </div>

          <p className="text-black dark:text-white text-[1rem] mt-5 leading-[2]"> {modalData.description} </p>

          {modalData.skills && (
            <>
              <div className="flex gap-2.5 items-center mt-6">
                <FontAwesomeIcon className="text-black dark:text-white text-[1.4rem]" icon={faMagnifyingGlass} />
                <p className="text-black dark:text-white text-[1rem] font-[400]">
                  <span className="font-[600]">Knowledges </span>
                </p>
              </div>
              <div className="flex gap-2.5 flex-wrap mt-6 mb-10">
                {modalData.skills.map((skills) => (
                  <button className="hover:bg-[#F4C9A5] dark:hover:bg-[#9d00ff] dark:bg-white text-[0.8rem] font-[500] text-black dark:text-black dark:hover:text-white px-4 py-1.5 rounded-2xl duration-200 shadow-[0px_4px_4px_rgba(0,0,0,0.15)] hover:shadow-none">{skills}</button>
                ))}
              </div>
            </>
          )}

          <div className="relative mt-10 overflow-hidden rounded-[20px] flex items-center justify-center cursor-pointer" onClick={() => setModalImage(modalData.image)}>
            <img className="w-full rounded-[20px]" src={process.env.PUBLIC_URL + modalData.image} alt={modalData.title} />
          </div>

          {modalData.link && (
            <div className="mt-10 flex items-center justify-center w-full">
              <a className="bg-white hover:bg-[#F4C9A5] dark:hover:bg-gradient-to-l from-[#df0000] to-[#550089] text-black dark:hover:text-white text-[1.1rem] font-[600] px-6 py-1.5 rounded-lg duration-[0.4s] shadow-[0px_4px_4px_rgba(0,0,0,0.15)] hover:shadow-none" href={modalData.link} target="_blank" rel="noreferrer">
                {" "}
                View{" "}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
