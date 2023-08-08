import { Link } from 'react-router-dom';
import '../../../index.css'

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
                <Link to="/profile">
                    <button>Começar</button>
                </Link>
                
            </section>
        </main>
    );
}