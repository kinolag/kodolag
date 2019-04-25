
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './gallery-get';
// import './Details.css';

export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {
            show: {} // an empty object
        };
    }

    componentDidMount() { //a lot will happen here
        let showId = this.props.match.params.showId; 
        // match.params is added by react-dom-router
        let show = getGallery()
            .find((show) => show.id === showId); 
            //return element whose id (in getGallery fn) matches the Id in the url
        this.setState({ show }); // an object where key = value { show: show }
    }

    render() {
        if(this.state.show === undefined) {
            return <Redirect to='not-found' />;
        } else {
            return (
            <div className='Details'>
                <h1 className='text'>{this.state.show.name}</h1>
                <div className='content'>
                    <div className='text'>
                        <p><span className='is-teal'>Synopsis: </span> {this.state.show.synopsis}</p>
                        <p><span className='is-teal'>Year of release:  </span>{this.state.show.year}</p>
                        <p><span className='is-teal'>Country:  </span>{this.state.show.country}</p>
                    </div>
                    <img className='poster' src={this.state.show.logo}
                        alt={this.state.show.name} />
                </div>
                <div className='padder'>
                    <Link className='a1' to='/'>Back to home page</Link>
                </div>
            </div>
            );
        }
    }   
}
