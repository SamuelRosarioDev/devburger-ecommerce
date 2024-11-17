import { useState } from "react";
import {
	PaymentElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles.css";
import { toast } from "react-toastify";
import { api } from "../../../services/api";
import { useCart } from "../../../hooks/CartContext";

export function CheckoutForm() {
	const { cartProducts, clearCart } = useCart();
	const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();
	const {
		state: { dpmCheckerLink },
	} = useLocation();

	const [message, setMessage] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			console.error("Stripe or elements failed ");
			return;
		}

		setIsLoading(true);

		const { error, paymentIntent } = await stripe.confirmPayment({
			elements,
			redirect: "if_required",
		});

		if (error) {
			setMessage(error.message);
			toast.error(error.message);

		} else if (paymentIntent && paymentIntent.status === "succeeded") {
			try {
				const products = cartProducts.map((product) => {
					return {
						id: product.id,
						quantity: product.quantity,
						price: product.price,
					};
				});

				const { status } = await api.post(
					"/orders",
					{ products },
					{
						validateStatus: () => true,
					},
				);

				if (status === 200 || status === 201) {
					setTimeout(() => {
						navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
					}, 2000);
					clearCart();
					toast.success("Pedido realizado com sucesso.");
				} else if (status === 409) {
					toast.error("Falha ao realizar seu pedido.");
				} else {
					throw new Error();
				}
			} catch (error) {
				toast.error("Falha no sistema! Tente novamente.");
			}
		}else {
			navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);

		}

		setIsLoading(false);
	};

	const paymentElementOptions = {
		layout: "tabs",
	};

	return (
		<div className="container">
			<form id="payment-form" onSubmit={handleSubmit}>
				<PaymentElement id="payment-element" options={paymentElementOptions} />
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					className="button"
					disabled={isLoading || !stripe || !elements}
					id="submit"
				>
					<span id="button-text">
						{isLoading ? (
							<div className="spinner" id="spinner" />
						) : (
							"Pagar agora"
						)}
					</span>
				</button>
				{/* Show any error or success messages */}
				{message && <div id="payment-message">{message}</div>}
			</form>
			{/* [DEV]: Display dynamic payment methods annotation and integration checker */}
			<div id="dpm-annotation">
				<p>
					Os metodos de pagamentos são disponibilizados de acordo com a sua
					região.&nbsp;
					<a
						href={dpmCheckerLink}
						target="_blank"
						rel="noopener noreferrer"
						id="dpm-integration-checker"
					>
						Ver métodos de pagamento
					</a>
				</p>
			</div>
		</div>
	);
}
