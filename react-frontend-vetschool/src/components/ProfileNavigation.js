import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/ProfileNavigation.css';

function ProfileNavigation() {
    return (
        <div>
            <div className="profileLinks">
                <Link className="profileNavigation" to="/medical">Medical Issues</Link>
                <Link className="profileNavigation" to="/animal-info">Animal Info</Link>
                <Link className="profileNavigation" to="/weight">Weight</Link>
                <Link className="profileNavigation" to="/images">Images</Link>    
            </div>
        </div>
    )
}

export default ProfileNavigation
