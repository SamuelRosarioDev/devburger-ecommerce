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
        right: 50px;
        background-color: #9658a6;
        box-shadow: inset ${({ theme }) => theme.darkWhite} 0px 0px 0.5rem 0px;
    }

    .react-multiple-carousel__arrow--left{
        background-color: ${({ theme }) => theme.purple};
        box-shadow: inset ${({ theme }) => theme.darkWhite} 0px 0px 0.5rem 0px;
        top: 10px;
        left: 10px;
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

