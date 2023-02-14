interface SidebarElementProps {
  onClick?: () => void;
  book: {
    img: string;
    category: string;
    title: string;
    author: string;
  };
}

export const SidebarElement = ({ book }: SidebarElementProps) => {
  return (
    <a href="" className="flex w-full items-start sm:h-20 lg:h-32">
      <img
        src={book.img}
        alt=""
        className="mr-2 h-full w-2/5 rounded-md object-cover lg:w-1/3"
      />
      <div className="flex w-3/5 flex-col items-start gap-y-1 lg:w-2/3">
        <div className="max-w-full truncate rounded-md bg-slate-200 p-1 text-xs dark:text-black">
          {book.category}
        </div>
        <div className="max-w-full truncate text-sm font-bold">
          {book.title}
        </div>
        <div className="max-w-full truncate text-xs">{book.author}</div>
      </div>
    </a>
  );
};
