import Button from 'core/components/Button';
import { userData } from 'core/types/userData';
import fetchProfile from 'core/utils/request';
import React, { useState } from 'react';
import ResultAreaLoader from './Loaders/ResultAreaLoader';
import ResultArea from './ResultArea';
import './styles.css';


const Search = () => {
    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState<userData>({
        login: '',
        avatar_url: '',
        company: '',
        blog: '',
        location: '',
        created_at: '',
        public_repos: 0,
        followers: 0,
        following: 0,
        html_url: ''
    });
    const [result, setResult] = useState(false);
    const [isLoading, SetIsLoading] = useState(false);

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult(true);
        SetIsLoading(true);
        fetchProfile({ name: userName })
            .then(response => setUserData(response.data))
            .finally(() => {
                SetIsLoading(false);
            });
    }
    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <div className="search-area-container">

                    <h1 className="search-area-title">
                        Encontre um perfil Github
                    </h1>
                    <input
                        className="search-area-form"
                        type="text"
                        placeholder="Usuário Github"
                        onChange={handleOnChange}
                    />
                    <div className="search-btn pb-40">
                        <Button buttonName="Encontrar" />
                    </div>
                </div>
            </form>
            <div>
                {result ?
                    <div className="result-area-container">
                        {isLoading ? 
                        <ResultAreaLoader />
                        : <ResultArea details={userData} />
                        }
                    </div>
                    : <div></div>}
            </div>
        </div>
    );
}

export default Search;