import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';
import defaultImage from '../../../public/OD.jpg';

function Avatar({size, src, appearance}) {
    return <img src={src}
        alt=""
        className={
            `avatar avatar--${size} avatar--${appearance}`
        }/>;
}

Avatar.defaultProps = {
    size: "medium",
    appearance: "circle",
    src: defaultImage
};

Avatar.propTypes = { /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(
        ['small', 'medium', 'large']
    ),

    /**
     * How should it appear?
     */
    appearance: PropTypes.oneOf(
        ['circle', 'square']
    )
};

export default Avatar;
