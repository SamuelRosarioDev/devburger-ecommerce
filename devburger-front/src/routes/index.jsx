import { Route, Routes } from "react-router-dom";
import { Cart, Checkout, CompletePayment, EditProduct, Home, Login, Menu, NewProduct, Orders, Products, Register } from "../pages";
import UserLayout from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";


export function Router() {
	return (
		<Routes>
			{/* USERS */}
			<Route path="/" element={<UserLayout />} >
				<Route path="/" element={<Home />} />
				<Route path="/cardapio" element={<Menu />} />
				<Route path="/carrinho" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/complete" element={<CompletePayment />} />
			</Route>

			{/* ADMIN */}
			<Route path="/admin" element={<AdminLayout />} >
				<Route path="/admin/pedidos" element={<Orders />} />
				<Route path="/admin/novo-produto" element={<NewProduct />} />
				<Route path="/admin/editar-produto" element={<EditProduct />} />
				<Route path="/admin/produtos" element={<Products />} />
			</Route>

			{/* AUTH */}
			<Route path="/login" element={<Login />} />
			<Route path="/cadastro" element={<Register />} />

		</Routes>
	)

}