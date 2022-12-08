import styled from "styled-components";
import backgroundSidebar from '../../assets/images/bg-sidebar-desktop.svg'
export const ContainerSidebar = styled.header`
    border: none;
    display: flex;
    flex-direction: column;
    width: 20rem;
    height: 40rem;
    background-image: url(${backgroundSidebar});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;

`