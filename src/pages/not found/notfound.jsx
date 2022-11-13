import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found | Jefferson Dela Cruz";
  }, []);

  return (
    <>
      <div className="container lg:pt-10 pb-10 px-2 sm:px-5 md:px-10">
        <h2 className="page-title-headline text-black dark:text-[white] flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7 after:bg-black dark:after:bg-gradient-to-l from-[#df0000] to-[#550089]">Not Found</h2>
      </div>
    </>
  );
}
