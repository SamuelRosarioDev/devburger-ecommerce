import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from "../../assets/background.svg";
import BannerHamburger from "../../assets/banner-hamburger.svg";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient( #ffffff7f,#ffffff7f), url(${Background});
`;

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url(${BannerHamburger}) no-repeat;
    background-position: center;
    background-color: #1f1f1f;
    background-size: cover;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 60px;
        color: #fff;
        text-align: center;

        position: absolute;
        right: 20%;
        top: 30%;
    }

    span{
        display: block;
        color: #fff;
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
    color: ${props => props.isActiveCategory ? '#9758a6' : '#696969'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && "2px solid #9758a6"} ;
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