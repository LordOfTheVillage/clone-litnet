import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Info from "../pages/Info";
import Terms from "../pages/Info/Terms";
import Payment from "../pages/Info/Payment";
import Contests from "../pages/Contests";
import BookPage from "../pages/Book";
import { PersonalAbout } from "../modules/personal-about";
import NotFound from "../pages/NotFound";
import AccountLibrary from "../pages/Account/AccountLibrary";
import AccountEdit from "../pages/Account/AccountEdit";
import ContestPage from "../pages/ContestPage";
import { RegistrationPage } from "../pages/registration";
import { AuthorizationPage } from "../pages/authorization";
import { PersonalPage } from "../pages/personal";
import { PersonalBlog } from "../modules/personal-blog";
import { PersonalBook } from "../modules/personal-book";
import Account from "../pages/Account";
import { AccountAddBlog } from "../pages/Account/AccountAddBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/info",
        element: <Info />,
        children: [
          {
            path: "terms",
            element: <Terms />,
          },
          {
            path: "payment",
            element: <Payment />,
          },
        ],
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/authorization",
        element: <AuthorizationPage />,
      },
      {
        path: "/contests",
        element: <Contests />,
      },
      {
        path: "/contests/:slug",
        element: <ContestPage />,
      },
      {
        path: "/book/:slug",
        element: <BookPage />,
      },
      {
        path: "/users/:id",
        element: <PersonalPage />,
        children: [
          {
            path: "about",
            element: <PersonalAbout />,
          },
          {
            path: "blogs",
            element: <PersonalBlog />,
          },
          {
            path: "books",
            element: <PersonalBook />,
          },
        ],
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          {
            index: true,
            element: <AccountLibrary />,
          },
          {
            path: "library",
            element: <AccountLibrary />,
          },
          {
            path: "edit",
            element: <AccountEdit />,
          },
          {
            path: "add-blog",
            element: <AccountAddBlog />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
