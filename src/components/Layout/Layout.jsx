import { Outlet } from "react-router-dom";
import { AppBar } from '../AppBar/AppBar';
import { Container } from "./Layout.styled";

export const Layout = () => { 
    return (
        <Container>
            <AppBar/>
            <Outlet/>
        </Container>
    )
}