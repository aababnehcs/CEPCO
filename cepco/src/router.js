import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ContractsGrid from "./pages/ContractsGrid"
import CreateContract from "./pages/CreateContract"
import UserGrid from "./pages/UserGrid"
import UserEdit from "./pages/EditUser"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/Contracts",
    element: <ContractsGrid />,
  },
  {
    path: "/Contracts/Create",
    element: <CreateContract />,
  },
  {
    path: "/Profile",
    element: <UserGrid />,
  },
  {
    path: "/Profile/Edit",
    element: <UserEdit />,
  },
]);
export default router;
