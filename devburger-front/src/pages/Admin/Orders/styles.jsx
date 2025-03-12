import styled from "styled-components";
import Select from "react-select";

export const ProductImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`

export const SelectStatus = styled(Select)`
    width: 200px;
`

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px 0;
    gap: 50px;
`;
export const FilterOption = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${props => props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
    border-bottom: ${props => props.$isActiveStatus ? `1px solid ${props.theme.purple}` : 'none'};
    font-size: 18px;
    line-height: 20px;
    padding-bottom: 5px;
`;