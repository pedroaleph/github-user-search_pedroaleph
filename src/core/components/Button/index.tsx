import React from 'react';
import './styles.css';

type Props ={
    buttonName: string;
}

const Button = ({buttonName}: Props) => {
    return(
        <button className="btn-general" >
            <span className="btn-name">
                {buttonName}
            </span>
        </button>
    )
}

export default Button;