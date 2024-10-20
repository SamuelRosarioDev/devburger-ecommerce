import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { api } from "../../services/api";
import { Container, ContainerItems, Title } from "./styles";

export function CategoriesCarousel() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function loadCategories() {
			const { data } = await api.get("/categories");
			console.log(data);
			setCategories(data);
		}
		loadCategories();
	}, []);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 4,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1280 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1280, min: 690 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 690, min: 0 },
			items: 2,
		},
	};

	return (
		<Container>
			<Title>Categorias</Title>
			<Carousel
				responsive={responsive}
				infinite={true}
				partialVisbile={false}
				itemClass="carousel-item"
			>
				{categories.map((category) => (
					<ContainerItems key={category.id} imageUrl={category.url}>
						<p>{category.name}</p>
					</ContainerItems>
				))}
			</Carousel>
		</Container>
	);
}
