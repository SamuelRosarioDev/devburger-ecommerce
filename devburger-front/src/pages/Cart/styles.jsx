import styled from "styled-components";
import Background from "../../assets/background.svg";
import Texture from '../../assets/texture.svg'
export const Container = styled.div`
    width: 100%;
    background: linear-gradient( #ffffff7f,#ffffff7f), url(${Background});
    min-height: 100vw;
`
export const Banner = styled.div`
    background: url(${Texture});
    background-size: cover;
    background-position: center;
    background-color: ${({ theme }) => theme.mainBlack};
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    height: 180px;

    img{
        height: 150px;
    }
`
export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: ${({ theme }) => theme.green};
    text-align: center;
    position: relative;
    &::after{
        position: absolute;
        bottom: 0;
        left: calc(50% + -28px);
        content: '';
        width: 56px;
        height: 4px;
        background-color: ${({ theme }) => theme.green};

    }
`
export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    gap: 40px;
    padding: 40px;
    margin: 0 auto;
`
