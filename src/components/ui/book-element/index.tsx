import { ElementWrapper } from "../element-wrapper";
import { AiFillStar, AiOutlineComment } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";
import { Icon } from "../icon";
import { BookElementType } from "../../../types/types";

type BookElementProps = {
  onClick?: () => void;
} & BookElementType;

export const BookElement = ({
  title,
  author,
  img,
  rating,
  commentAmount,
  readAmount,
  categories,
  annotation,
}: BookElementProps) => {
  return (
    <ElementWrapper className="relative flex h-60 flex-col gap-y-5 lg:h-72">
      <div className="flex">
        <img
          src={img}
          alt=""
          className="mr-5 h-36 w-24 rounded object-cover lg:h-44 lg:w-32"
        />
        <div className="flex flex-col items-start">
          <div className="mb-3 text-xl font-bold leading-5">{title}</div>

          <div className="mb-2 flex flex-wrap gap-x-3 dark:text-black">
            {categories.map((item) => (
              <div className="max-w-full truncate rounded-md bg-slate-200 p-1 text-sm">
                {item}
              </div>
            ))}
          </div>

          <div className="mb-2 text-sm">{author}</div>
          <div className="flex items-center gap-x-3">
            <Icon title={rating} icon={<AiFillStar />} />
            <Icon title={readAmount} icon={<GiBookshelf />} />
            <Icon title={commentAmount} icon={<AiOutlineComment />} />
          </div>
        </div>
      </div>
      <div className="h-28 overflow-hidden">{annotation}</div>
    </ElementWrapper>
  );
};
