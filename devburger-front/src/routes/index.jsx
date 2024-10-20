import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const routers = createBrowserRouter([
	{ path: "/", element: <Home /> },
	{ path: "/login", element: <Login /> },
	{ path: "/cadastro", element: <Register /> },
]);
