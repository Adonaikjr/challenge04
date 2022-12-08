import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { Container } from "./styled";

export function LayoutDefault() {
    return (
        <Container>
            <Sidebar />
            <Outlet />
        </Container>
    )
}