import Loader from "./pages/loader/loader";
import HeaderPC from "./pages/header/header_pc";
import Navbar from "./pages/header/navbar";
import HeaderMobile from "./pages/header/header_mobile";
import Footer from "./pages/footer/footer";
import Profile from "./pages/about/profile";
import About from "./pages/about/about";
import Resume from "./pages/resume/resume";
import Projects from "./pages/projects/projects.jsx";
import Certificates from "./pages/certificates/certificates.jsx";
import Blogs from "./pages/blogs/blogs.jsx";
import Blog from "./pages/blogs/blog.jsx";
import NotFound from "./pages/not found/notfound.jsx";
import Modal from "./pages/modal/modal";
import ModalImage from "./pages/modal/modal-image";
import Wave from "./pages/wave/wave";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga4";
import BackToTop from "./pages/backtotop/backtotop";

ReactGA.initialize("G-YTEG7EMDSR");

export default function App() {
  const location = useLocation();

  const [loader, setLoader] = useState(null);

  const [selectedModalData, setSelectedModalData] = useState(null);

  const [selectedModalImage, setSelectedModalImage] = useState(null);

  const setModalData = (modalData) => {
    setSelectedModalData(modalData);
  };

  const unsetModalData = () => {
    setSelectedModalData(null);
  };

  const setModalImage = (modalImage) => {
    setSelectedModalImage(modalImage);
  };

  const unsetModalImage = () => {
    setSelectedModalImage(null);
  };

  useEffect(() => {
    if (selectedModalData || selectedModalImage) {
      document.getElementById("main-container").style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.getElementById("main-container").style.paddingRight = "";
      document.body.style.overflow = "auto";
    }
  }, [selectedModalData, selectedModalImage]);

  useEffect(() => {
    setLoader(true);

    unsetModalData();

    document.getElementById("main-container").style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      document.getElementById("main-container").style.paddingRight = "";
      document.body.style.overflow = "auto";
      setLoader(false);
    }, 1800);

    setTimeout(() => {
      window.scrollTo({ top: 0 });
      AOS.init({
        duration: 400,
        once: true,
        disable: "mobile",
      });

      setTimeout(() => {
        ResetAOS();
      }, 50);
    }, 50);

    ReactGA.send({ hitType: "pageview", page: location.pathname });
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
      <div id="main-container" className="min-h-screen bg-[#DEE7EC] dark:bg-[#111111] lg:bg-[#DEE7EC] dark:lg:bg-[#252527] bg-no-repeat bg-center bg-cover bg-fixed lg:pb-16 w-full mb-[0px] lg:mb-0 relative">
        <Wave />
        {loader && <Loader />}
        <HeaderPC />
        <div className="lg:container grid grid-cols-12 md:gap-10 justify-between lg:mt-[200px]">
          <div data-aos="fade-right" className="aos-element col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-[170px] mb-[170px]">
            <Profile />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div data-aos="fade-left" className="aos-element">
              <Navbar />
            </div>
            <div id="sub-container" data-aos="fade-up" className="aos-element lg:rounded-2xl bg-white dark:bg-[#111111] overflow-hidden min-h-[100vh] flex flex-col justify-between">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects setModalData={setModalData} />} />
                <Route path="/certificates" element={<Certificates setModalData={setModalData} setModalImage={setModalImage} />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<Blog setModalImage={setModalImage} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
        <BackToTop />
        <HeaderMobile />
      </div>

      {selectedModalData && <Modal modalData={selectedModalData} unsetModalData={unsetModalData} modalImage={selectedModalImage} setModalImage={setModalImage} />}

      {selectedModalImage && <ModalImage modalImage={selectedModalImage} unsetModalImage={unsetModalImage} />}
    </>
  );
}
