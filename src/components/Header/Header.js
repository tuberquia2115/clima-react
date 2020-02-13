import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ titulo }) => {
    return (
        <nav>
            <div className="nav-wrapper light-blue bg-darken-2">
                <a href="#!" className="brand-logo" style={{backgroundColor:'black'}}>{titulo.toUpperCase()}</a>
            </div>
        </nav>

    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
    

}
export default Header;