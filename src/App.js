import Loader from "./pages/loader/loader";
import Navbar from "./pages/header/navbar";
import HeaderMobile from "./pages/header/header_mobile";
import Footer from "./pages/footer/footer";
import Profile from "./pages/about/profile";
import About from "./pages/about/about";
import Resume from "./pages/resume/resume";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [loader, setLoader] = useState(true);

  const [page, setPage] = useState("");

  useEffect(() => {
    console.log(`${process.env.REACT_APP_API_URL}/`);
    setPage(process.env.REACT_APP_API_URL + window.location.pathname);

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div class="bg-[#251320] min-h-screen bg-no-repeat bg-center bg-cover bg-fixed lg:pb-16 w-full">
      {loader && <Loader />}

      <HeaderMobile page={page} />
      <div class="container grid grid-cols-12 md:gap-10 justify-between">
        <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-[220px]">
          <Profile />
        </div>
        <div class="col-span-12 lg:col-span-8 lg:mt-[220px]">
          <Navbar page={page} />
          <div class="lg:rounded-2xl bg-[#111111]">
            <Routes>
              {/* <Route index element={<About />} /> */}
              <Route path={`${process.env.REACT_APP_API_URL}/`} element={<About />} />
              <Route path={`${process.env.REACT_APP_API_URL}/resume`} element={<Resume />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
