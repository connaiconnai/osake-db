import { createBrowserRouter } from "react-router-dom";
import { TopPage, DetailPage } from "@pages/index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "/detail/:uid",
    element: <DetailPage />,
  },
]);

export default routes;
