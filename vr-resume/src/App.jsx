import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resume from "./pages/Resume";
import Root from "./pages/Root";
import Sections from "./pages/Sections";

import styles from "./styles.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/resume", element: <Resume /> },
      { path: "/sections", element: <Sections /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
