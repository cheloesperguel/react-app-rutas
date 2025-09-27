import Companies from "./pages/Companies";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfe";
import Users from "./pages/Users";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    children: [
      {
        index: true,
        element: <Users />,
      },
      {
        path: ":id",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/companies",
    element: <Companies />,
  },
]

export default routes;
