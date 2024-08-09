import { useState, useEffect } from "react";
import Img1 from "./assets/Img1.jpg";
import Img3 from "./assets/Img3.jpg";
import Img4 from "./assets/Img4.jpg";
import Img5 from "./assets/Img5.jpg";
import Img6 from "./assets/Img6.jpg";
import Img7 from "./assets/Img7.jpg";

export const Slider = () => {
  const slides = [Img1, Img3, Img4, Img5, Img6, Img7];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full">
      <div className="relative w-full h-[620px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-center bg-cover transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4 mb-6">
        {slides.map((_, index) => (
          <a
            key={index}
            href="#"
            className={`w-4 h-4 rounded-full cursor-pointer ${currentSlide === index ? 'bg-slate-100' : 'bg-slate-200'}`}
            onClick={(e) => {
              e.preventDefault();
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
