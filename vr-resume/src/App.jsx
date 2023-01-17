import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Career from "./pages/Sections/Career";
import Education from "./pages/Sections/Education";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Projects from "./pages/Sections/Projects";
import Register from "./pages/Register";
import Resume from "./pages/Resume";
import Root from "./pages/Root";
import Sections from "./pages/Sections";
import SelfPresentation from "./pages/Sections/SelfPresentation";
import Profile from "./pages/Sections/Profile";

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
      { path: "/sections/career", element: <Career /> },
      { path: "/sections/career/:careerId", element: <Career /> },
      { path: "/sections/education", element: <Education /> },
      { path: "/sections/education/:educationId", element: <Education /> },
      { path: "/sections/projects", element: <Projects /> },
      { path: "/sections/projects/:projectsId", element: <Projects /> },
      { path: "/sections/about-me", element: <SelfPresentation /> },
      { path: "/sections/about-me/aboutMeId", element: <SelfPresentation /> },
      { path: "/sections/profile", element: <Profile /> },
      { path: "/sections/profile/profileId", element: <Profile /> },
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
