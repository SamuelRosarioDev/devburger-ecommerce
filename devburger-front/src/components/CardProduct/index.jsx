import { CartButton } from "../CartButton";
import { CardImage, Container } from "./styles";
import { useCart } from "../../hooks/CartContext";

export function CardProduct({ product }) {
	const { putProductsInCart } = useCart()
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.currencyValue}</strong>
			</div>
			<CartButton onClick={()=>{
				putProductsInCart(product)
			}}/>
		</Container>
	);
}
