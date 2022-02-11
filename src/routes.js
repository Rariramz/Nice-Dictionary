import HomePage from "./pages/HomePage";
import WordPage from "./pages/WordPage";

export const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/:word",
    component: <WordPage />,
  },
];
