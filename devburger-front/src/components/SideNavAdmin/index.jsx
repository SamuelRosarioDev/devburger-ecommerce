import { navLinks } from "./navLinks"
import Logo from "../../assets/logo.svg"
import SignOut from "../../assets/signout.svg"
import { Container, Footer, NavLink, NavLinkContainer } from "./styles"
import { useUser } from "../../hooks/UserContext"
import { useResolvedPath } from "react-router-dom"

export function SideNavAdmin() {
    const { logout } = useUser()
    const { pathname } = useResolvedPath()


    return (
        <Container>
            <img src={Logo} alt="Hamburger Logo DevBurger" />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink key={link.id} to={link.path} $isActive={pathname === link.path}>
                        <img src={link.icon} alt={link.label} />
                        <span>{link.label}</span>

                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <img src={SignOut} alt="signout icon" />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}