import { Routes, Route } from "react-router-dom";
import App from "../App";
import { LayoutDefault } from "../components/layout/layoutDefault";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<LayoutDefault />} >
                <Route path='/' element={<App />} />
            </Route>
        </Routes>
    )
}