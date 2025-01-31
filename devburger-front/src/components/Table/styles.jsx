import styled from "styled-components";

export const Root = styled.table`
    border-collapse: collapse;
    width: 100%;
    background-color: ${({ theme }) => theme.white};
    
`

export const Header = styled.thead`

`

export const Tr = styled.tr`

`

export const Th = styled.th`
    padding: 16px;
    text-align: left;
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.secondBlack};
    border-bottom: 1px solid ${({ theme }) => theme.lightGray};
    &:last-child{
        border-top-right-radius: 20px;
    }
    &:first-child{
        border-top-left-radius: 20px;
    }
`

export const Td = styled.td`
    padding: 16px;
    color: ${({ theme }) => theme.secondBlack};
    font-weight: 500;
    line-height: 115%;
`

export const Body = styled.tbody`

`
