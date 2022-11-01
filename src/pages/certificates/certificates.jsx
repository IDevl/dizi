import { useEffect, useState } from "react";
import certificates from "./certificates.json";
import classnames from "classnames";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Certificates({ setModalData }) {
  const [category, setCategory] = useState("Cert");

  useEffect(() => {
    document.title = "Certificates | Jefferson Dela Cruz";
  }, []);

  return (
    <>
      <div className="container lg:pt-10 pb-10 px-2 sm:px-5 md:px-10">
        <h2 className="page-title-headline text-black dark:text-[white] flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7 after:bg-black dark:after:bg-gradient-to-l from-[#df0000] to-[#550089]">Certificates</h2>
        <ul className="mt-8 flex w-full justify-start md:justify-end flex-wrap font-[500] text-white text-[0.85rem] sm:text-[1rem]">
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "Cert" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("Cert")}>
            {" "}
            All{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "DICT Cert" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("DICT Cert")}>
            {" "}
            DICT{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "ReSkills Cert" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("ReSkills Cert")}>
            {" "}
            ReSkills{" "}
          </li>
          <li className={classnames("cursor-pointer mr-4 md:mx-4 duration-[0.4s] text-black dark:text-white", category === "PUP Cert" && "text-[#F4C9A5] dark:text-[#bf58ff]")} onClick={() => setCategory("PUP Cert")}>
            {" "}
            PUP{" "}
          </li>
        </ul>
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 767: 2 }}>
          <Masonry gutter="2rem" className="mt-8 min-h-[100vh]">
            {certificates
              .filter((certificates) => certificates.category.includes(category))
              .map((certificates, index) => (
                <div key={index} className="grid-item w-100 bg-[#F3F6F6] dark:bg-transparent p-6 border-[2px] border-[#F3F6F6] dark:border-[#212425] shadow-md shadow-[#b7b7b7] dark:shadow-none rounded-lg">
                  <div className="overflow-hidden" onClick={() => setModalData(certificates)}>
                    <img className="w-full cursor-pointer transition duration-[0.4s] hover:scale-110 h-auto" src={process.env.PUBLIC_URL + certificates.image} alt={certificates.title} />
                  </div>
                  <span className="pt-5 text-[0.85rem] block text-black dark:text-[#A6A6A6]"> {certificates.category} </span>
                  <h2 className="text-[1.2rem] font-[620] duration-300 text-black dark:text-white mt-1"> {certificates.title} </h2>
                </div>
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}
