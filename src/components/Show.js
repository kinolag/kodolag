import React from 'react';
import { Link } from 'react-router-dom';

export default function Show(props) {
        return (
            <Link to={`./${props.id}`} className='item a1'>
                <img src={props.logo} alt={`${props.name} poster`} />
                <div className='overlay'>
                    <h2>{props.name}</h2>
                </div>
            </Link>
        );
    }


