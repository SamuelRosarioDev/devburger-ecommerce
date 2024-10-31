import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardProduct } from "../../components/CardProduct";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import {
	Banner,
	CategoryButton,
	CategoryMenu,
	Container,
	ProductsContainer,
} from "./styles";

export function Menu() {
	const [categories, setCategories] = useState([]);
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const navigate = useNavigate();

	const { search } = useLocation();

	const queryParams = new URLSearchParams(search);

	const [actveCategory, setActveCategory] = useState(() => {
		const categoryId = +queryParams.get("categoria");
		if (categoryId) {
			return categoryId;
		}
		return 0;
	});

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get("/categories");
			const newCategories = [{ id: 0, name: "Todas" }, ...data];

			setCategories(newCategories);
		}

		async function loadProducts() {
			const { data } = await api.get("/products");

			const newProducts = await data.map((product) => ({
				currencyValue: formatPrice(product.price),
				...product,
			}));
			setProducts(newProducts);
		}

		loadCategories();
		loadProducts();
	}, []);

	useEffect(() => {
		if (actveCategory === 0) {
			setFilteredProducts(products);
		} else {
			const newFilterProducts = products.filter(
				(product) => product.category_id === actveCategory,
			);
			setFilteredProducts(newFilterProducts);
		}
	}, [products, actveCategory]);

	return (
		<Container>
			<Banner>
				<h1>
					O MELHOR
					<br />
					HAMBÚRGUER
					<br />
					ESTÁ AQUI!
					<span>Esse cardápio está irresistível!</span>
				</h1>
			</Banner>
			<CategoryMenu>
				{categories.map((category) => (
					<CategoryButton
						key={category.id}
						$isActiveCategory={category.id === actveCategory}
						onClick={() => {
							navigate(
								{
									pathname: "/cardapio",
									search: `?categoria=${category.id}`,
								},
								{
									replace: true,
								},
							);
							setActveCategory(category.id);
						}}
					>
						{category.name}
					</CategoryButton>
				))}
			</CategoryMenu>
			<ProductsContainer>
				{filteredProducts.map((product) => (
					<CardProduct product={product} key={product.id} />
				))}
			</ProductsContainer>
		</Container>
	);
}
