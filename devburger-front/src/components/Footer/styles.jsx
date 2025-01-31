import styled from "styled-components";

export const Container = styled.div`
    height: 50px;
    background-color: ${({ theme }) => theme.darkPurple};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        color: ${({ theme }) => theme.white};
        font-size: 14px;
        font-weight: lighter;
    }
`