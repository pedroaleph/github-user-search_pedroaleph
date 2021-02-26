import fetchProfile from 'core/utils/request';
import React, { useState } from 'react';
import Button from '../Button';
import './styles.css';

const SearchArea = () => {
    const [userName, setUserName] = useState('');


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);    
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchProfile({name: userName})
        .then(response => console.log(response))
    }    
    return(
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
                <div className="search-area-btn">
                    <Button buttonName="Encontrar"/>
                </div>
            </div>
        </form>
    )
}

export default SearchArea;