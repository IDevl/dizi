import { useRef } from "react";
import { useEffect } from "react";

export default function ModalImage({ modalImage, unsetModalImage }) {
  const handleClickOutside = (e) => {
    const outerDiv = document.getElementById("image-outer-div");
    if (e.target === outerDiv) {
      unsetModalImage();
      modalImageRef.current = null;
    }
  };

  const modalImageRef = useRef(null);

  useEffect(() => {
    modalImageRef.current = modalImage;
    document.addEventListener("keydown", (e) => {
      console.log(modalImageRef.current)
      if (e.key === "Escape" && modalImageRef.current) {
        modalImageRef.current = null;
        unsetModalImage();
      }
    });
  }, [modalImageRef, unsetModalImage, modalImage]);

  return (
    <div id="image-outer-div" className="fixed inset-0 flex justify-center z-[999999999] bg-[#000000c9] px-0 py-20 overflow-y-auto" onClick={(e) => handleClickOutside(e)}>
      <div className="max-w-[1200px] flex items-center justify-center relative m-auto w-auto">
        <img className="w-full" src={[process.env.PUBLIC_URL + modalImage]} alt={modalImage} />
      </div>
    </div>
  );
}
