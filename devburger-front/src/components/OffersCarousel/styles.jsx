import nextImgCarrouselOffer from '../../assets/nextOffer.png';
import previousImgCarrouselOffer from '../../assets/previousOffer.png';

import styled from "styled-components";

export const Container = styled.div`
    padding: 0 0 40px 40px;
    .carousel-item {
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--right{
        top: 10px;
        right: 40px;
        background-color: ${({ theme }) => theme.darkWhite};
    }

    .react-multiple-carousel__arrow--right:hover{
        background-color: ${({ theme }) => theme.secondWhite};
    }

    .react-multiple-carousel__arrow--left{

        top: 10px;
        left: 10px;
        background-color: ${({ theme }) => theme.darkWhite};

    }
    .react-multiple-carousel__arrow--left:hover{
        background-color: ${({ theme }) => theme.secondWhite};
    }

    .react-multiple-carousel__arrow--right::before{
        content: url(${nextImgCarrouselOffer});
        transform: scale(0.55);
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-multiple-carousel__arrow--left::before{
        content: url(${previousImgCarrouselOffer});
        transform: scale(0.55);
        width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${({ theme }) => theme.green};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: ${({ theme }) => theme.green} ;
    }
`;

