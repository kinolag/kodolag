import React from 'react';
import Show from './Show';
import getGallery from './gallery-get';

export default function Gallery(props) {
    fetch('/rest/shows') // edited path
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });
        
    return (
        <div>
            <div className='container'>
            {
                getGallery().map(show => (
                    <Show
                        key={show.id} //key is a React req. for lists/arrays
                        id={show.id} 
                        name={show.name}
                        logo={show.logo} 
                    />
                ))
            }
                {/* <Show id='show001' name='I Pugni In Tasca' logo={poster001} />
                <Show id='show002' name='L&#39;Eclisse' logo={poster002} />
                <Show id='show003' name='Un Americano A Roma' logo={poster003} />
                <Show id='show004' name='Hable Con Ella' logo={poster004} />
                <Show id='show005' name='Otto E Mezzo' logo={poster005} />
                <Show id='show006' name='The Great Beauty' logo={poster006} /> */}
            </div>
        </div>
    );
}

