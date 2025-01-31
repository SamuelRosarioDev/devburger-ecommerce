import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/background.svg";
import BannerHamburger from "../../assets/banner-hamburger.svg";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.secondWhite};
    background: linear-gradient( #ffffff7f,#ffffff7f), url(${Background});
`;

export const ButtonReturn = styled(Link)`
    font-size: 2rem;
    z-index: 1;
    text-align: center;
    width: 3rem;
    position: absolute;
    top: 5.5rem;
    left: 0.8rem;
    box-shadow:  0 0 1rem ${({ theme }) => theme.purple};
    background-color: #9658a683;
    border-radius: 50%;
    text-decoration: none;
    transition: all 0.3s;
    &:hover{
        box-shadow:  0 0 1rem ${({ theme }) => theme.green};
        background-color: ${({ theme }) => theme.green};

    }
`

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url(${BannerHamburger}) no-repeat;
    background-position: center;
    background-color: ${({ theme }) => theme.mainBlack};
    background-size: cover;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 60px;
        color: ${({ theme }) => theme.white};
        text-align: center;

        position: absolute;
        right: 20%;
        top: 30%;
    }

    span{
        display: block;
        color: ${({ theme }) => theme.white};
        font-size: 20px;
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.isActiveCategory ? `${({ theme }) => theme.purple}` : '#696969'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `2px solid  ${({ theme }) => theme.purple}`} ;
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
`;
