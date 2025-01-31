import styled from "styled-components";

export const ContainerButton = styled.button`
    background-color: ${({ theme }) => theme.purple};
    width: 100%;
    height: 52px;
    border: none;
    font-size: 30px;
    border-radius: 5px;
    color: ${({ theme }) => theme.white};
    &:hover{
        background-color: ${({ theme }) => theme.secondDarkPurple};
    }
`;
