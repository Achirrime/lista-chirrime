import { useState, useEffect } from "react";
import { Circle } from "@phosphor-icons/react";
import Img1 from "./assets/Img1.jpg";
import Img3 from "./assets/Img3.jpg";
import Img4 from "./assets/Img4.jpg";
import Img5 from "./assets/Img5.jpg";
import Img6 from "./assets/Img6.jpg";
import Img7 from "./assets/Img7.jpg";


export const Slider = () => {
  const slides = [
    {
      src: Img1,
    },
   
    {
      src: Img3,
     
    },
    {
      src: Img4,
    },
    {
      src: Img5,
    },
    {
      src: Img6,
    },
    {
      src: Img7,
    },
  ];

  const [currentSlide, setcurrentSlide] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setcurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentSlide + 1;
    setcurrentSlide(newSlide);
  };

  const goToSlide = (slideIndex) => {
    setcurrentSlide(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-screen h-[720px] m-auto mb-12 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].src})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="absolute left-0 top-0 bottom-0 bg-sky-blue-200 bg-opacity-50 text-cream-100 font-bold text-lg p-4 w-[300px] text-center flex items-center justify-center">
          {slides[currentSlide].text}
        </div>
      </div>

      <div className="flex top-4 justify-center py-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentSlide === slideIndex
                ? "text-sky-blue-200"
                : "text-sky-blue-100"
            }`}
          >
            <Circle size={16} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
