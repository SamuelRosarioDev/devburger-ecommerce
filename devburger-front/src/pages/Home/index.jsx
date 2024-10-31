import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container } from "./styles";

export function Home() {
    
    return(
        <main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <div>
                    <CategoriesCarousel/>
                    <OffersCarousel/>
                </div>
            </Container>
        </main>
    )
}