import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import styles from "./styles.module.scss";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
