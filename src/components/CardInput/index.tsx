import axios from "axios";
import { useState } from "react";

type githubResponse = {
    url: string;
    followers: string;
    location: string;
    name: string;
}

export default function CardInput() {

    const [search, setSearch] = useState("");

    const [url, setUrl] = useState("");
    const [followers, setFollowers] = useState("");
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");

    const handleSearch = () => {
        axios.get<githubResponse>(`https://api.github.com/users/${search}`)
            .then((response) => {
                setUrl(response.data.url);
                setFollowers(response.data.followers);
                setLocation(response.data.location);
                setName(response.data.name);
            });
    }

    return (
        <main>
            <section id="card-input">
                <div className="card-profile-container">
                    <div className="card-profile-title">
                        <p>Encontre um perfil Github</p>
                    </div>
                    <div>
                        <input className="card-profile-input"
                            type="text"
                            placeholder="Usuário Github"
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                    <button onClick={handleSearch}>Encontrar</button>
                </div>
            </section>
        </main >
    );
}