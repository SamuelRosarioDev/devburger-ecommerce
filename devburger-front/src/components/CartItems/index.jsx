import TrashIcon from "../../assets/trash.svg";
import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import { Table } from "../index";
import { ButtonGroup, Buttons, EmptyCart, ProductImage, TrashImage } from "./styles";

export function CartItems() {
	const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } =
		useCart();
	return (
		<Table.Root>
			<Table.Header>
				<Table.Tr>
					<Table.Th> </Table.Th>
					<Table.Th>Items</Table.Th>
					<Table.Th>Preço</Table.Th>
					<Table.Th>Quantidade</Table.Th>
					<Table.Th>Total</Table.Th>
					<Table.Th> </Table.Th>
				</Table.Tr>
			</Table.Header>
			<Table.Body>
				{cartProducts?.length ? (
					cartProducts.map((product) => (
						<Table.Tr key={product.id}>
							<Table.Td>
								<ProductImage src={product.url} alt="food img" />
							</Table.Td>
							<Table.Td>{product.name}</Table.Td>
							<Table.Td>{product.currencyValue}</Table.Td>
							<Table.Td>
								<ButtonGroup>
									<Buttons onClick={() => decreaseProduct(product.id)}>
										-
									</Buttons>
									{product.quantity}
									<Buttons onClick={() => increaseProduct(product.id)}>
										+
									</Buttons>
								</ButtonGroup>
							</Table.Td>
							<Table.Td>
								<div style={{ fontWeight: "bold" }}>
									{formatPrice(product.quantity * product.price)}
								</div>
							</Table.Td>
							<Table.Td>
								<TrashImage
									src={TrashIcon}
									alt="lixeira"
									onClick={() => deleteProduct(product.id)}
								/>
							</Table.Td>
						</Table.Tr>
					))
				) : (
					<Table.Tr>
						<Table.Td colSpan={5} style={{ textAlign: "center" }}>
							<EmptyCart>O carrinho está vazio</EmptyCart>
						</Table.Td>
					</Table.Tr>
				)}
			</Table.Body>
		</Table.Root>
	);
}
