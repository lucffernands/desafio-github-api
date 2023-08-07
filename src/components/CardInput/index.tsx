export default function CardInput() {

    return (
        <main>
            <section className="card-input-profile">
                <div className="card-profile">
                    <div className="card-profile-title">
                        <p>Encontre um perfil Github</p>
                    </div>
                    <div>
                        <input className="card-profile-input" type="text" placeholder="Usuário Github" />
                    </div>
                    <button>Encontrar</button>
                </div>
            </section>
        </main>
    );
}