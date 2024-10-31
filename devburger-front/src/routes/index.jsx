import { createBrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Menu } from "../pages/Menu";
import { Register } from "../pages/Register";

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
	{ path: "/carrinho", element: <Cart /> },
]);
