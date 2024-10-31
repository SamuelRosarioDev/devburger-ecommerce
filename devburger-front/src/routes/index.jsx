import { createBrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";
import { Register } from "../pages/Register";
import { Footer } from "../components/Footer";

export const routers = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Header />
				<Home />
				<Footer />
			</>
		),
	},
	{ path: "/login", element: <Login /> },
	{ path: "/cadastro", element: <Register /> },
	{
		path: "/cardapio",
		element: (
			<>
				<Header />
				<Menu />
			</>
		),
	},
]);
