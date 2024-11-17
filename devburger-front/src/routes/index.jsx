import { createBrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Cart, Checkout, CompletePayment, Home, Login, Menu, Register } from "../pages";

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
	{ path: "/checkout", element: <Checkout /> },
	{ path: "/complete", element: <CompletePayment /> },
]);
