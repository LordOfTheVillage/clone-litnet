interface SliderElementProps {
  onClick?: () => void;
  book: {
    img: string;
    category: string;
    title: string;
    author: string;
  };
}

export const SliderElement = ({ book }: SliderElementProps) => {
  return (
    <a href="" className="flex w-40 flex-col items-start">
      <img
        src={book.img}
        alt=""
        className="mb-3 h-60 w-full rounded-md object-cover"
      />
      <div className="mb-1 max-w-full truncate rounded-md bg-slate-200 p-1 text-sm dark:text-black">
        {book.category}
      </div>
      <div className="mb-1 max-w-full truncate text-base font-bold">
        {book.title}
      </div>
      <div className="max-w-full truncate text-sm">{book.author}</div>
    </a>
  );
};
