import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getGallery from './gallery-get';
// import './Details.css';

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            show: {} // fetch find (below) returns an object 
        };
    }

    componentDidMount() {
        let showId = this.props.match.params.showId;

        // fetch block replaces part below, commented out
        fetch('/rest/shows') // better here in cDM (than in render) for user xp
            .then(function (response) {
                return response.json();
            })
            .then(shows => {
                // console.log(JSON.stringify(myJson));
                this.setState({
                    show: shows.find(show => show.id === showId)
                })
            });

        // // match.params is added by react-dom-router
        // let show = shows()

        //     //return element whose id (in getGallery fn / shows.js) matches the Id in the url
        // this.setState({ show }); // an object where key = value { show: show }
    }

    render() {
        if (!('id' in this.state.show)) {
            return <div>Loading...</div>;
        } else if (this.state.show) {
            return (
                <div className='Details'>
                    <h1 className='text'>{this.state.show.name}</h1>
                    <div className='content'>
                        <div className='text is-gill'>
                            <p><span className='is-teal'>Synopsis: </span> {this.state.show.synopsis}</p>
                            <p className='pad-10'><span className='is-teal'>Year of release: </span>{this.state.show.year}</p>
                            <p className='pad-10'><span className='is-teal'>Country: </span>{this.state.show.country}</p>
                        </div>
                        <div>
                        {/* <p className='is-teal'>`../common/img/${this.state.show.id}.jpg`</p> */}
                            <img className='poster'
                                // src={this.state.show.logo}
                                src={require(`../common/img/${this.state.show.id}.jpg`)}
                                alt={this.state.show.name}
                            />
                        </div>
                    </div>
                    <div className='pad-10'>
                        <Link className='a1 is-lucida' to='/'>Back to film list</Link>
                    </div>
                </div>
            );
        } else {
            return <Redirect to='not-found' />;
        }
    }
}
