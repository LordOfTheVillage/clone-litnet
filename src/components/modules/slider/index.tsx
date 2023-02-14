import { SliderElement } from "../../ui/slider-element";
import { ReactComponent as Arrow } from "../../../common/assets/icons/slider-button.svg";
import { useState } from "react";

interface SliderProps {
  title: string;
  books: Array<{
    img: string;
    category: string;
    title: string;
    author: string;
  }>;
}

export const Slider = ({ title, books }: SliderProps) => {
  const [slides, setSlides] = useState(books);

  const handleClickRight = () => {
    setSlides([...slides, slides[0]].filter((_, index) => index !== 0));
  };

  const handleClickLeft = () => {
    setSlides(
      [slides[slides.length - 1], ...slides].filter(
        (_, index) => index !== slides.length
      )
    );
  };

  return (
    <div className="flex flex-col">
      <h2 className="mb-9 text-2xl">{title}</h2>
      <div className="relative h-full">
        <div className={`flex justify-center gap-x-5`}>
          {slides.map((item, index) => (
            <SliderElement key={index} book={item} />
          ))}
        </div>
        <button
          className="absolute top-0 left-0 flex h-full items-center justify-center bg-white bg-opacity-60 px-3 hover:bg-opacity-80 dark:bg-zinc-800 dark:bg-opacity-60 dark:hover:bg-opacity-80"
          onClick={handleClickLeft}
        >
          <Arrow className="rotate-180 dark:fill-white" />
        </button>
        <button
          className="absolute top-0 right-0 flex h-full items-center justify-center bg-white bg-opacity-60 px-3 hover:bg-opacity-80 dark:bg-zinc-800 dark:bg-opacity-60 dark:hover:bg-opacity-80"
          onClick={handleClickRight}
        >
          <Arrow className="dark:fill-white" />
        </button>
      </div>
    </div>
  );
};
