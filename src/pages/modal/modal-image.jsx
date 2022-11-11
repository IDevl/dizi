import { useEffect } from "react";

export default function ModalImage({ modalImage, unsetModalImage }) {
  const handleClickOutside = (e) => {
    const outerDiv = document.getElementById("image-outer-div");
    if (e.target === outerDiv) {
      unsetModalImage();
      modalImage = null;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modalImage) {
        modalImage = null;
        unsetModalImage();
      }
    });
  }, []);

  return (
    <div id="image-outer-div" className="fixed inset-0 flex justify-center z-[999999999] bg-[#000000c9] px-0 py-20 overflow-y-auto" onClick={(e) => handleClickOutside(e)}>
      <div className="max-w-[1200px] flex items-center justify-center relative m-auto w-auto">
        <img className="w-full" src={[process.env.PUBLIC_URL + modalImage]} />
      </div>
    </div>
  );
}
