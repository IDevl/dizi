import Loader from "./pages/loader/loader";
import HeaderPC from "./pages/header/header_pc";
import Navbar from "./pages/header/navbar";
import HeaderMobile from "./pages/header/header_mobile";
import Footer from "./pages/footer/footer";
import Profile from "./pages/about/profile";
import About from "./pages/about/about";
import Resume from "./pages/resume/resume";
import Projects from "./pages/projects/projects.jsx";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [loader, setLoader] = useState(null);

  const location = useLocation();

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setLoader(true);

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.body.style.overflow = "auto";
      setLoader(false);
    }, 1800);

    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 1000);

    AOS.init({
      duration: 400,
      once: true
    });

    ResetAOS();
  }, [location.pathname]);

  function ResetAOS() {
    const aosElements = Array.from(document.getElementsByClassName("aos-element"));

    aosElements.forEach((item) => item.classList.remove("aos-animate"));

    setTimeout(() => {
      aosElements.forEach((item) => item.classList.add("aos-animate"));
    }, 1600);
  }

  return (
    <>
      <div className="min-h-screen bg-[#251320] bg-no-repeat bg-center bg-cover bg-fixed lg:pb-16 w-full mb-[100px] lg:mb-[0px] lg:mb-0">
        {loader && <Loader />}
        <HeaderPC />
        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          <div data-aos="fade-right" className="aos-element col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-[170px]">
            <Profile />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div data-aos="fade-left" className="aos-element">
              <Navbar />
            </div>
            <div data-aos="fade-up" className="aos-element lg:rounded-2xl bg-[#111111] overflow-hidden">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>

        <motion.div className="fixed top-0 bottom-0 right-0 origin-top w-0 xl:w-[10px] bg-gradient-to-t from-[#8d0000] to-[#550089]" style={{ scaleY: scrollYProgress }} />

        <HeaderMobile />
      </div>
    </>
  );
}
