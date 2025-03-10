import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({ theme }) => theme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;
`;

export const Content = styled.div`
    display: flex ;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;
export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    hr{
        height: 24px;
        border: 1px solid ${({ theme }) => theme.darkGray};
    }
`;
export const HeaderLink = styled(Link)`
    color: ${(props) => (props.$isActive ? ({ theme }) => theme.purple : ({ theme }) => theme.white)};
    border-bottom: ${(props) => (props.$isActive ? `1px solid  ${({ theme }) => theme.purple}` : "none")} ;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
    &:hover{
        color: ${({ theme }) => theme.purple};
    }
`;
export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;
export const Logout = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.red};
    text-decoration: none;
    font-weight: 700;
`;
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    img{
        width: 40px;
    }
    div{
        margin-top: 9px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: self-start;
    }
    p{
        color: ${({ theme }) => theme.white};
        line-height: 90%;
        font-weight: 300;
        span{
            font-weight: 700;
            color: #9758a6;
        }
    }
`;
export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    img{
        width: 40px;
    }
`;
