import { Outlet } from 'react-router-dom';
import '../../../index.css'
import CardInput from '../../../components/CardInput';

export default function Profile() {

    return (
        <>
            <CardInput />
            <Outlet />
        </>
    );
}