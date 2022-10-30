import { useState, useEffect } from "react";
import classNames from "classnames";

export default function Loader() {
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPreloaded(true);
    }, 1000);
  }, []);

  return (
    <div id="preloader" className={classNames("before:bg-black after:bg-black", preloaded && "preloaded")}>
      <div className="loader_line"></div>
    </div>
  );
}
