import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Root from "./pages/Root";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import styles from "./styles.module.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ path: "/login", element: <Login /> }],
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
