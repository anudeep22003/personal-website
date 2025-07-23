import { createBrowserRouter } from "react-router";
import Homepage from "./pages/Homepage";
import RootLayout from "./Layout";
import ResumePage from "./pages/Resume";
import AboutPage from "./pages/About";
import ProfessionalHistory from "./pages/ProfessionalHistory";
import BlogListPage from "./pages/BlogList";
import BlogPostPage from "./pages/BlogPost";

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
        path: "/history",
        element: <ProfessionalHistory />,
      },
      {
        path: "/blog",
        element: <BlogListPage />,
      },
      {
        path: "/blog/:slug",
        element: <BlogPostPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
