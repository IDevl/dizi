import Profile from "./profile";

export default function About() {
  return (
    <>
      <div class="pt-12 py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <div class="lg:hidden">
          <Profile />
        </div>

        <h2 class="page-title-headline flex items-start gap-3.5 flex-col md:flex-row md:items-center md:gap-7">About Me</h2>
        <div class="lg:grid grid-cols-12 md:gap-10 pt-4 pt-[30px] items-center">
          <div class="col-span-12 space-y-2.5">
            <div class="mr-0">
              <p class="text-[#b3b3b3] leading-7"> I am a BS Information Technology graduate from the Polytechnic University of the Philippines and a Web Developer at Exceed Digital Solutions. </p>
              <p class="text-[#b3b3b3] leading-7 mt-2.5"> I am an enthusiast in application and software development and has the perseverance to expand his knowledge and skills through creating real-world projects. I also have an aspiration to attain more comprehensive experiences in the field of Information Technology. </p>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 class="text-[35px] text-white font-semibold pb-5"> What I do! </h3>
        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">

          <div class="flex gap-4 p-6 rounded-xl border-[1px] border-[#5e5e5e] bg-transparent">
            <img class="w-10 h-10 object-contain block" src="https://bostamihtml.ibthemespro.com/images/icons/icon.svg" alt="icon" />
            <div class="space-y-2">
              <h3 class="text-white text-[22px] font-semibold"> Web Development </h3>
              <p class="leading-8 text-gray-lite text-[#A6A6A6]"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
