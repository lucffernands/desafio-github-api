import { ProfileDTO } from "../../models/Profile/Profile";
import '../../index.css';

type Props = {
    profile: ProfileDTO;
}

export default function ProfileResponse({ profile }: Props) {

    return (
        < div className="card-deactivate">
            <div className="card-profile-container">
                <div className="card-profile-photo">
                    <img src={profile.avatar} alt="foto-perfil" />
                </div>
                <div className="card-profile-info">
                    <div className="card-profile-info-title">
                        <p>Informações</p>
                    </div>
                    <div className="card-profile-info-box">
                    <p>Perfil: <span className="font-regular font-blue">{profile.url}</span></p>
                    </div>
                    <div className="card-profile-info-box">
                    <p>Seguidores: <span className="font-regular">{profile.followers}</span></p>
                    </div>
                    <div className="card-profile-info-box">
                    <p>Localidade: <span className="font-regular">{profile.location}</span></p>
                    </div>
                    <div className="card-profile-info-box">
                        <p>Nome: <span className="font-regular">{profile.name}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}