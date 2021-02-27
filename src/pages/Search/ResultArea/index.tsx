import Button from 'core/components/Button';
import { userData } from 'core/types/userData';
import './styles.css';
import React from "react";
import dayjs from 'dayjs';


type userDetails = {
    details: userData
}

const formatDate = (date: string) => {
    return (dayjs(date).format("DD/MM/YYYY"));
}

const ResultArea = ({ details }: userDetails) => {
    return (
        <>
            <div className="user-image-col">
                <img src={details.avatar_url} alt={details.login} className="user-image " />
            </div>
            <div className="user-details-col">
                <span className="user-info">Repositórios públicos: {details.public_repos}</span>
                <span className="user-info">Seguidores: {details.followers}</span>
                <span className="user-info">Seguindo: {details.following}</span>
                <div className="user-info pb-20">
                    <h1 className="user-info-title">
                        Informações
                    </h1>
                    <h3 className="user-info-border user-details">
                        <p>Empresa: <span className="n">{details.company}</span></p>

                    </h3>
                    <h3 className="user-info-border user-details">
                        <p>Website/Blog: <span className="n">{details.blog}</span></p>

                    </h3>
                    <h3 className="user-info-border user-details">
                        <p>Localidade: <span className="n">{details.location}</span></p>

                    </h3>
                    <h3 className="user-info-border user-details">
                        <p>Membro desde: <span className="n">
                                {formatDate(details.created_at)}
                            </span>
                        </p>

                    </h3>
                </div>
            </div>
            <div className="search-btn" onClick={() => {
                window.open(details.html_url);
            }}>
                <Button buttonName="Ver Perfil" />
            </div>
        </>

    )
}

export default ResultArea;