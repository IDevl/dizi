import { useEffect, useState } from "react";

export default function ProgressBar(props) {
  const { completed, name } = props;

  const [value, setValue] = useState(0);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setValue(completed);
      }
    });
  });

  useEffect(() => {
    observer.observe(document.querySelector(".progressbar"));
  }, [observer]);

  const completedStyles = {
    opacity: `${value}%`,
    transitionDuration: "3s",
  };

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-1">
        <span className="font-semibold text-black dark:text-[#A6A6A6]"> {name} </span>
        <span className="font-semibold text-black dark:text-[#A6A6A6]" style={completedStyles}>
          {" "}
          {value}%{" "}
        </span>
      </div>
      <div className="w-full h-2.5 bg-[#F3F6F6] dark:bg-[#1c1c1c] mt-[10px]">
        <div className="progressbar bg-[#F4C9A5] dark:bg-gradient-to-l from-[#ff0000] to-[#9e00ff]" style={{ height: "100%", width: `${value}%`, transitionDuration: "3s", borderRadius: "0" }}>
          {" "}
        </div>
      </div>
    </div>
  );
}
