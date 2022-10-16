import { useState, useEffect } from "react";

export default function Loader() {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloaded(true);
    }, 1000);
  }, []);

  return (
    <div id="preloader" className={preloaded ? "preloaded" : ""}>
      <div class="loader_line"></div>
    </div>
  );
}
