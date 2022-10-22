import Loader from "./pages/loader/loader";
import Navbar from "./pages/header/navbar";
import HeaderMobile from "./pages/header/header_mobile";
import Footer from "./pages/footer/footer";
import Profile from "./pages/about/profile";
import About from "./pages/about/about";
import Resume from "./pages/resume/resume";
import Projects from "./pages/projects/projects.jsx";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-[#251320] min-h-screen bg-no-repeat bg-center bg-cover bg-fixed lg:pb-16 w-full mb-[100px] lg:mb-[0px] lg:mb-0">
      {/* {loader && <Loader />} */}
      <div className="container grid grid-cols-12 md:gap-10 justify-between">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-[175px]">
          <Profile />
        </div>
        <div className="col-span-12 lg:col-span-8 lg:mt-[220px]">
          <Navbar />
          <div className="lg:rounded-2xl bg-[#111111] overflow-hidden">
            <Routes>
              <Route exact path="/" element={<About />} />
              <Route exact path="/resume" element={<Resume />} />
              <Route exact path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
      <HeaderMobile />
    </div>
  );
}
