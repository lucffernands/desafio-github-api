import { Link } from "react-router-dom";

export default function CardInput() {

    return (
        <main>
            <section>
                <div className="card-profile-container">
                    <div className="card-profile-title">
                        <p>Encontre um perfil Github</p>
                    </div>
                    <div>
                        <input className="card-profile-input" type="text" placeholder="Usuário Github" />
                    </div>
                    <Link to="/profile/github">
                    <button>Encontrar</button>
                    </Link>
                    
                </div>
            </section>
        </main>
    );
}