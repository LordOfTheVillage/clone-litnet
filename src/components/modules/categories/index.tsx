import { Link } from "react-router-dom";

const categories = [
  "Фэнтези",
  "ЛитРПГ",
  "Любовные романы",
  "Фантастика",
  "Исторический роман",
  "Молодежная проза",
  "Попаданцы",
  "Женский роман",
  "Фанфик",
  "Детективы",
  "Проза",
  "Боевик",
  "Триллеры",
  "Мистика/Ужасы",
  "Разное",
];

interface CategoriesProps {
  onClick?: () => void;
}

export const Categories = ({ onClick }: CategoriesProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 justify-between gap-x-6 sm:grid-cols-3">
        {categories.map((item) => (
          <Link
            to=""
            className="mb-3 text-sm hover:text-indigo-400 sm:text-base lg:text-lg"
            onClick={onClick}
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="my-1 h-[1px] w-full bg-black dark:bg-white"></div>
      <Link
        to="/all"
        className="block w-full text-right font-bold text-indigo-400 sm:text-base lg:text-lg"
        onClick={onClick}
      >
        Посмотреть все жанры
      </Link>
    </div>
  );
};
