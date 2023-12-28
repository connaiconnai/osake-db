import { createBrowserRouter } from "react-router-dom";
import { TopPage } from "@pages/index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
]);

export default routes;
