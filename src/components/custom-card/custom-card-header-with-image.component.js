import React from 'react';

import { CardHeaderImg, CardImgOverlay } from './custom-card.styles';

import './custom-card.styles.css';

export const CustomCardHeaderWithImage = ({ imgUrl, backgroundColorOverlay, children, ...props }) => {
    return (
        <CardHeaderImg imgUrl={imgUrl} {...props}>
            <div className='custom-card-header-child-container'>
                {children}
            </div>
            <CardImgOverlay backgroundColorOverlay={backgroundColorOverlay}/>
        </CardHeaderImg>
    )
};
