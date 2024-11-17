import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "../Button";
import { Container, ContainerBottom, ContainerTop } from "./styles";
export function CartResume() {
	const [finalPrice, setFinalPrice] = useState(0);
	const [deliveryTax] = useState(500);
	const navigate = useNavigate();
	const { cartProducts, clearCart } = useCart();

	useEffect(() => {
		const sumAllItems = cartProducts.reduce((acc, current) => {
			return current.price * current.quantity + acc;
		}, 0);
		setFinalPrice(sumAllItems);
	}, [cartProducts]);

	const submitOrder = async () => {
		

		try {
			const products = cartProducts.map((product) => {
				return {
					id: product.id,
					quantity: product.quantity,
					price: product.price,
				};
			});
			const { data } = await api.post('/create-payment-intent', {products})
			navigate('/checkout', {
				state: data
			})
			
		} catch (error) {
			toast.error('Error tente novamente', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			})
		}


	};
	return (
		<div>
			<Container>
				<ContainerTop>
					<h2 className="title">Resumo do Pedido</h2>
					<p className="items">Itens</p>
					<p className="items-price">{formatPrice(finalPrice)}</p>
					<p className="delivery-tax">Taxa de Entrega</p>
					<p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
				</ContainerTop>
				<ContainerBottom>
					<p>Total</p>
					<p>{formatPrice(finalPrice + deliveryTax)}</p>
				</ContainerBottom>
			</Container>
			<Button onClick={submitOrder}>Finalizar pedido</Button>
		</div>
	);
}
