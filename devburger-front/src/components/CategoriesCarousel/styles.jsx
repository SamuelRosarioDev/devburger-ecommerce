import previousImgCarrouselCategory from "../../assets/previousImgCarrouselCategory.png";
import nextImgCarrouselCategory from "../../assets/nextImgCarrouselCategory.png";

import { Link } from "react-router-dom";
import styled from "styled-components";
export const Container = styled.div`
    padding-left: 40px;
    .carousel-item {
        padding-right: 40px;
    }
    .react-multiple-carousel__arrow--right{
        top: 10px;
        right: 50px;
        background-color: ${({ theme }) => theme.darkWhite};
   }

   .react-multiple-carousel__arrow--right::before{
        content: url(${nextImgCarrouselCategory});
        transform: scale(0.55);
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-multiple-carousel__arrow--left{
        background-color: ${({ theme }) => theme.darkWhite};
        top: 10px;
        left: 10px;
    }

    .react-multiple-carousel__arrow--left::before{
        content: url(${previousImgCarrouselCategory});
        transform: scale(0.55);
        width: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`;
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${({ theme }) => theme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 20px 0 40px 0;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: ${({ theme }) => theme.purple};

    }
`;

export const ContainerItems = styled.div`
    background: url(${(props) => props.src}), no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 20px;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;
    cursor: grab;
`;

export const CategoryButton = styled(Link)`
    color: ${({ theme }) => theme.white};
    background-color: rgb(0, 0, 0,0.5);
    padding: 10px 30px ;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: 500;
    margin-top: 50px;
    text-decoration: none;

    &:hover{
        background-color: ${({ theme }) => theme.purple};
        
    }
`;
