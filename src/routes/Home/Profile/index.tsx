import axios from "axios";
import { useState } from "react";
import '../../../index.css';

type githubResponse = {
    url: string;
    followers: string;
    location: string;
    name: string;
    avatar_url: string;
}

export default function Profile() {

    const [search, setSearch] = useState("");

    const [url, setUrl] = useState("");
    const [followers, setFollowers] = useState("");
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");
    const [avatar_url, setAvatar] = useState("");

    const handleSearch = () => {
        axios.get<githubResponse>(`https://api.github.com/users/${search}`)
            .then((response) => {
                setUrl(response.data.url);
                setFollowers(response.data.followers);
                setLocation(response.data.location);
                setName(response.data.name);
                setAvatar(response.data.avatar_url)
            });
    }

    return (
        <main>
            <section id="card-search">
                <div className="card-search-container">
                    <div className="card-search-title">
                        <p>Encontre um perfil Github</p>
                    </div>
                    <div>
                        <input className="card-search-input"
                            type="text"
                            placeholder="Usuário Github"
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                    <button onClick={handleSearch}>Encontrar</button>
                </div>

                <section id="card-profile">
                    <div className="card-profile-container">
                        <div className="card-profile-photo">
                            <img src={avatar_url} alt="foto-perfil" />
                        </div>
                        <div className="card-profile-info">
                            <div>
                                <p>Informações</p>
                            </div>
                            <div className="card-profile-info-box">
                                <p>Perfil: {url}</p>
                            </div>
                            <div className="card-profile-info-box">
                                <p>Seguidores: {followers}</p>
                            </div>
                            <div className="card-profile-info-box">
                                <p>Localidade: {location}</p>
                            </div>
                            <div className="card-profile-info-box">
                                <p>Nome: {name}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </main>

    );
}

