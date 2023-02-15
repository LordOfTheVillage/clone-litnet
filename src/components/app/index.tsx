import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
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
import { Game } from "../pages/Game";
import { AccountAddBlog } from "../pages/Account/AccountAddBlog";
import BlogPage from "../pages/BlogPage";
import ContestRules from "../pages/ContestPage/ContestRules";
import ContestBooks from "../pages/ContestPage/ContestBooks";
import { AuthProvider } from "../context/AuthContext";
import { AccountAddBook } from "../pages/Account/AccountAddBook";

const client = new QueryClient();

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
        path: "/game",
        element: <Game />,
      },
      {
        path: "/blogs/:id",
        element: <BlogPage />,
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
        children: [
          {
            index: true,
            element: <ContestBooks />,
          },
          {
            path: "rules",
            element: <ContestRules />,
          },
        ],
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
          {
            path: "add-book",
            element: <AccountAddBook />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
