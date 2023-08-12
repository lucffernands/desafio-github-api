import '../../../index.css'
import Button from '../../../components/Button';
import { NavLink } from 'react-router-dom';

export default function HomeBody() {

    return (
        <main>
            <section className="card-text container">
                <div className="card-text-title">
                    <p>Desafio Github API</p>
                </div>
                <div className="card-text-subTitle">
                    <p>DevSuperior - Escola de programação</p>
                </div>
                <NavLink to="/profile-search">
                    <Button Title="Começar" />
                </NavLink>     
            </section>
        </main>
    );
}