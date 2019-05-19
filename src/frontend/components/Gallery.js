import React from 'react';
import Show from './Show';
// import getGallery from './gallery-get';

export default class Gallery extends React.Component {
    constructor() {
        super();
        this.state = {
            shows: []
        };
    }

    componentDidMount() {
        fetch('/rest/shows') // better here in cDM (than in render) for user xp
            .then(function (response) {
                return response.json();
            })
            .then(shows =>
                // console.log(JSON.stringify(myJson));
                this.setState({
                    shows
                })
            );
    }
    

    render() {
        return (
            <div>
                <div className='container'>
                    {
                        //getGallery().map(show => (
                        this.state.shows.map(show => (
                            <Show
                                key={show.id} 
                                id={show.id}
                                name={show.name}
                                // logo={show.logo}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }

}

