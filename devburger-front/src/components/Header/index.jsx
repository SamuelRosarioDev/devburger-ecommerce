import { useNavigate, useResolvedPath } from "react-router-dom";
import CartHeader from "../../assets/cartHeader.svg";
import PerfilHeader from "../../assets/perfilHeader.svg";
import {
	Container,
	Content,
	HeaderLink,
	LinkContainer,
	Logout,
	Navigation,
	Options,
	Profile,
} from "./styles";
import { useUser } from "../../hooks/UserContext";
export function Header() {
	const navigate = useNavigate();
	const {logout, userInfo} = useUser()

	const { pathname } = useResolvedPath();

	function logoutUser() {
		logout()
		navigate('/login')
	}
	return (
		<Container>
			<Content>
				<Navigation>
					<div>
						<HeaderLink to="/" $isActive={pathname === "/"}>
							Home
						</HeaderLink>
						<hr />
						<HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
							Cardapio
						</HeaderLink>
					</div>
				</Navigation>
				<Options>
					<Profile>
						<img src={PerfilHeader} alt="Icon perfil" />

						<div>
							<p>
								Olá, <span>{userInfo.name}</span>
							</p>
							<Logout onClick={logoutUser}>Sair</Logout>
						</div>
					</Profile>
					<LinkContainer>
						<img src={CartHeader} alt="Icon carrinho" />
						<HeaderLink to='/carrinho'>Carrinho</HeaderLink>
					</LinkContainer>
				</Options>
			</Content>
		</Container>
	);
}
