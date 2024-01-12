import { AdminListPage, AdminEditPage } from "@pages/index";

const adminRoute = [
  {
    path: "/admin",
    element: <AdminListPage />,
  },
  {
    path: "/admin/detail/:uid",
    element: <AdminEditPage />,
  },
];

export default adminRoute;
