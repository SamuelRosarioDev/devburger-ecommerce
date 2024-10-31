import { CartButton } from "../CartButton";
import { CardImage, Container } from "./styles";

export function CardProduct({ product }) {
	return (
		<Container>
			<CardImage src={product.url} alt={product.name} />
			<div>
				<p>{product.name}</p>
				<strong>{product.currencyValue}</strong>
			</div>
			<CartButton />
		</Container>
	);
}
