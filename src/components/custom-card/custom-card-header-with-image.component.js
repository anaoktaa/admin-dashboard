import React from 'react';

import { CardHeaderImg, CardImgOverlay } from './custom-card.styles';

import './custom-card.styles.css';

export const CustomCardHeaderWithImage = ({ imgUrl, backgroundColorOverlay, noneBorderRadius, children, ...props }) => {
    return (
        <CardHeaderImg noneBorderRadius={noneBorderRadius} imgUrl={imgUrl} {...props}>
            <div className='custom-card-header-child-container'>
                {children}
            </div>
            <CardImgOverlay backgroundColorOverlay={backgroundColorOverlay}/>
        </CardHeaderImg>
    )
};

CustomCardHeaderWithImage.defaultProps = {
    noneBorderRadius: false  
};
