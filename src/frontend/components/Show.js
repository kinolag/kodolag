import React from 'react';
import { Link } from 'react-router-dom';

// export default function Show(props) 
export default class Show extends React.Component {
    render() {
        // let { id, name } = this.props;
        return (
            <Link to={`./${this.props.id}`} className='item a1'>
                {/* <img src={props.logo} alt={`${props.name} poster`} /> */}
                <img src={require(`../common/img/${this.props.id}.jpg`)} alt={this.props.name} /> 
                <div className='overlay'>
                    <h2>{this.props.name}</h2>
                </div>
            </Link>
        );
    }
}

// <img src={require(`${props.id}.jpg`)} alt={`${props.name} poster`} />
// <img src={require(`<path-to-image>`)} alt='' />
