import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import '../../index.css';

export default function Home() {
    
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}