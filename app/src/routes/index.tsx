import { createBrowserRouter } from "react-router-dom";
import { TopPage, DetailPage } from "@pages/index";
import adminRoute from "./Admin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "/detail/:uid",
    element: <DetailPage />,
  },
  ...adminRoute,
]);

export default routes;
