import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    *{
        color: #484848;
        font-weight: 500;
    }
`;

export const ContainerTop = styled.div`
    display: grid;
    grid-gap: 10px 30%;
    grid-template-areas: 'title title' 'items items-price' 'delivery-tax delivery-tax-price';
    .title{
        grid-area: title;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: #484848;
        color: #fff;
        width: 100%;
        padding: 15px;
        text-align: center;
        border-radius: 20px 20px 0 0;
    }

    .items, .delivery-tax{
        padding-left: 20px;
    }

    .items-price, .delivery-tax-price{
        padding-right: 20px;
    }
    .items{
        grid-area: items;
    }
    .items-price{
        grid-area: items-price;
    }
    .delivery-tax{
        grid-area: delivery-tax;
    }
    .delivery-tax-price{
        grid-area: delivery-tax-price;
    }
`;

export const ContainerBottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 700;
    margin-top: 24px;
    padding: 20px;
    *{
        font-weight: 700;
    }
`;
