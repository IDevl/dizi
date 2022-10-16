import Navbar from "./pages/navbar";
import HeaderMobile from "./pages/header_mobile";
import Footer from "./pages/footer";
import Profile from "./pages/profile";
import About from "./pages/about";
import { useState } from "react";

export default function App() {

  const [page, setPage] = useState("about");

  return (
    <div class="bg-[#251320] min-h-screen bg-no-repeat bg-center bg-cover bg-fixed lg:pb-16 w-full">
      <HeaderMobile page={page} />
      <div class="container grid grid-cols-12 md:gap-10 justify-between">
        <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-[220px]">
          <Profile />
        </div>
        <div class="col-span-12 lg:col-span-8 lg:mt-[220px]">
          <Navbar page={page} />
          <div class="lg:rounded-2xl bg-[#111111]">
            <About />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
