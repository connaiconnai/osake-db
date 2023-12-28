import {
  RouterProvider,
} from "react-router-dom";
import router from '@routes/index';

export default function BrowseRouterProvider() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

