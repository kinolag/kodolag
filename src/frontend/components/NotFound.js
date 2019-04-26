import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return(
        <div>
            <h1>The page does not exist.</h1>
            <Link className='a1 pad-10' to='/'>Back to home page</Link>
        </div>
        
    );
}

