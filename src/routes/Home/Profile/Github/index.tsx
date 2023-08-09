import '../../../../index.css';
import PhotoProfile from '../../../../assets/avatar.png';

export default function Github() {

    return (
        <main>
            <section>
                <div className="card-github-container">
                    <div className="github-photo">
                        <img src={PhotoProfile} alt="foto-perfil" />
                    </div>
                    <div className="card-github-info">
                        <div>
                            <p>Informações</p>
                        </div>
                        <div className="card-github-info-box">
                            <p>Perfil:</p>
                        </div>
                        <div className="card-github-info-box">
                            
                        </div>
                        <div className="card-github-info-box">
                           
                        </div>
                        <div className="card-github-info-box">
                            
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}