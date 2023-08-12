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
                    <div>
                        <p>Informações</p>
                    </div>
                    <div className="card-profile-info-box">
                        <p>Perfil: {profile.url}</p>
                    </div>
                    <div className="card-profile-info-box">
                        <p>Seguidores: {profile.followers}</p>
                    </div>
                    <div className="card-profile-info-box">
                        <p>Localidade: {profile.location}</p>
                    </div>
                    <div className="card-profile-info-box">
                        <p>Nome: {profile.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}