import { useEffect, useState } from "react";
import '../../../index.css';
import Button from "../../../components/Button";
import { ProfileDTO } from "../../../models/Profile/Profile";
import axios from "axios";
import ProfileResponse from "../../../components/ProfileResponse";
import ProfileNotFound from "../../../components/ProfileNotFound";

type FormData = {
    user: string;
};

export default function ProfileSearch() {

    const [formData, setFormData] = useState<FormData>({
        user: ''
    });

    const [conditions, setConditions] = useState({
        showResponse: false,
        responseNone: false
    });

    const [click, setClick] = useState(0);

    const [profile, setProfile] = useState<ProfileDTO>({
        avatar: '',
        url: '',
        followers: 0,
        location: '',
        name: ''

    });

    function handleImputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name
        setFormData({ ...formData, [name]: value })
    };

    function handleSubmit(event: any) {
        event.preventDefault();
        setClick(click + 1);
        formData.user === ''
            ? setConditions({ ...conditions, showResponse: false })
            : setConditions({ ...conditions, showResponse: true })
    };

    useEffect(() => {
        if (formData.user != '')
            axios.get(`https://api.github.com/users/${formData.user}`)
                .then(response => {
                    setConditions({ ...conditions, responseNone: false });
                    setProfile({
                        avatar: response.data.avatar_url,
                        url: response.data.url,
                        followers: Number(response.data.followers),
                        location: response.data.location,
                        name: response.data.name
                    });
                }).catch(() => setConditions({ ...conditions, responseNone: true }));
    }, [click]);

    return (
        <main>
            <section id="card-search">
                <form id="card-search-container" onSubmit={handleSubmit}>
                    <div className="card-search-title">
                        <p>Encontre um perfil Github</p>
                    </div>
                    <div>
                        <input className="card-search-input"
                            name="user"
                            type="text"
                            placeholder="Usuário Github"
                            onChange={handleImputChange}
                            value={formData.user}
                        />
                    </div>
                    <div>
                        <Button Title="Encontrar" />
                    </div>
                </form>
            </section>

            <section id="card-profile">
                {
                    !conditions.showResponse
                        ? (<></>)
                        : conditions.responseNone
                            ? (<ProfileNotFound />)
                            : (<ProfileResponse profile={profile} />)
                }
            </section>
        </main>
    );
}

