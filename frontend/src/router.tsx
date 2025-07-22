import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import RootLayout from "./Layout";
import ResumePage from "./pages/Resume";
import AboutPage from "./pages/About";
import ProfessionalHistory from "./pages/ProfessionalHistory";

export const routes = [
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/resume",
        element: <ResumePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/professional-history",
        element: <ProfessionalHistory />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
