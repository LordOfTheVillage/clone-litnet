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
import { AccountEditPassword } from "../pages/Account/AccountEditPassword";
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
import { AccountEditBook } from "../pages/Account/AccountEditBook";
import { AccountEditBookChapter } from "../pages/Account/AccountEditBook/AccountEditBookNewChapters";
import { AccountBook } from "../pages/Account/AccountBook";
import { AccountAddBook } from "../pages/Account/AccountAddBook";
import { AccountEditBookInfo } from "../pages/Account/AccountEditBook/AccountEditBookInfo";
import { UserContextProvider } from "../context/userContext";
import { ProtectedRoute } from "../context/userProtectRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCheckingAuth } from "../../hooks";

const client = new QueryClient({
  logger: {
    error: () => {},
    warn: console.warn,
    log: console.log,
  },
});

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
        path: "/book/:id",
        element: <BookPage />,
      },
      {
        path: "/users/:id",
        element: <PersonalPage />,
        children: [
          {
            index: true,
            element: <PersonalAbout />,
          },
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
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
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
            path: "edit-password",
            element: <AccountEditPassword />,
          },
          {
            path: "add-blog",
            element: <AccountAddBlog />,
          },
          {
            path: "add-book",
            element: <AccountAddBook />,
          },
          {
            path: "book/:id",
            element: <AccountBook />,
            children: [
              {
                path: "edit-book",
                element: <AccountEditBook />,
              },
              {
                path: "book-info/:id",
                element: <AccountEditBookInfo />,
              },
              {
                path: "chapter",
                element: <AccountEditBookChapter />,
              },
              {
                path: "chapter/:id",
                element: <AccountEditBookChapter />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  const user = useCheckingAuth();

  return user !== undefined ? (
    <QueryClientProvider client={client}>
      <UserContextProvider defaultUser={user}>
        <RouterProvider router={router} />
      </UserContextProvider>
    </QueryClientProvider>
  ) : (
    <h1>Loading...</h1>
  );
}

export default App;
