import Header from "./pages/header";
import Footer from "./pages/footer";
import Profile from "./pages/profile";
import About from "./pages/about";

export default function App() {
  return (
    <div class="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          <Profile />
        </div>
        <div class="col-span-12 lg:col-span-8">
          <Header />
          <div class="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <About />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
