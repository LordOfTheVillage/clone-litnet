import { PrimaryButton } from "../../ui/primary-button";
import { SecondaryButton } from "../../ui/secodary-button";
import { Wrapper } from "../../ui/wrapper";
import { ReactComponent as Logo } from "../../../common/assets/icons/logo.svg";
import { useState } from "react";
import { Burger } from "../../ui/burger";
import { CloseButton } from "../../ui/close-button";
import { Modal } from "../../ui/modal";
import { Categories } from "../categories";
import { Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface HeaderProps {
  isUser?: boolean;
}

const navItems = [
  {
    title: "Книги",
    link: "",
  },
  {
    title: "Конкурсы",
    link: "contests",
  },
  {
    title: "Блоги",
    link: "blogs",
  },
  {
    title: "Моя страница",
    link: `users/1`,
  },
];

export const Header = ({ isUser = true }: HeaderProps) => {
  const [burgerMenuDisplay, setBurgerMenuDisplay] = useState(false);
  const [categoriesModalDisplay, setCategoriesModalDisplay] = useState(false);
  const [isDark, setIsDark] = useState(localStorage.theme === "dark");

  const handleChangeMode = () => {
    setIsDark(!isDark);
    document.querySelector("html")?.classList.toggle("dark");
    localStorage.theme = !isDark ? "dark" : "light";
  };

  return (
    <header className="fixed z-10 flex h-16 w-full justify-center bg-white bg-opacity-60  backdrop-blur-sm dark:bg-zinc-800 dark:bg-opacity-60">
      <Wrapper className="flex items-center justify-between">
        <Link to="/">
          <Logo className="sm:mr-5 lg:mr-10" />
        </Link>
        <nav
          className={`${
            burgerMenuDisplay ? "flex" : "hidden"
          } absolute top-0 left-0 h-screen w-screen flex-col items-center bg-white py-8 sm:relative sm:flex sm:h-auto sm:w-auto sm:flex-grow sm:flex-row sm:justify-between sm:bg-transparent sm:py-0`}
        >
          <div className="flex flex-col items-center sm:flex-row sm:gap-2 lg:gap-4">
            {navItems.map((item) => (
              <Link
                to={item.link}
                key={item.title}
                className="my-2 w-full text-center hover:text-indigo-400 sm:my-0 sm:w-auto sm:text-sm lg:text-lg"
                onClick={() => {
                  item.title === "Книги" && setCategoriesModalDisplay(true);
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
          {!isUser ? (
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-end">
              <Link to="/authorization">
                <SecondaryButton
                  className="w-full sm:w-auto"
                  onClickButton={() => {}}
                >
                  Войти
                </SecondaryButton>
              </Link>
              <Link to="/registration">
                <PrimaryButton onClickButton={() => {}}>
                  Зарегистрироваться
                </PrimaryButton>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <SecondaryButton onClickButton={() => {}}>Выход</SecondaryButton>
            </Link>
          )}
          <CloseButton
            onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)}
            className="sm:hidden"
          />
        </nav>
        {
          <button onClick={handleChangeMode}>
            {isDark ? (
              <BsFillMoonFill className="ml-2 text-xl text-indigo-400" />
            ) : (
              <BsFillSunFill className="ml-2 text-xl text-indigo-400" />
            )}
          </button>
        }
        <div className="flex items-center gap-x-2 ">
          <Burger
            onClick={() => setBurgerMenuDisplay(!burgerMenuDisplay)}
          ></Burger>
        </div>
      </Wrapper>
      {categoriesModalDisplay && (
        <Modal displayModal={setCategoriesModalDisplay}>
          <Categories onClick={() => setCategoriesModalDisplay(false)} />
        </Modal>
      )}
    </header>
  );
};
