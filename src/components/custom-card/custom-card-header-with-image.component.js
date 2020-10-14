import React from 'react';

import { CardHeaderImg, CardImgOverlay } from './custom-card.styles';

import './custom-card.styles.css';

export const CustomCardHeaderWithImage = ({ imgUrl, children }) => {
    return (
        <CardHeaderImg imgUrl={imgUrl}>
            <div className='custom-card-header-child-container'>
                {children}
            </div>
            <CardImgOverlay/>
        </CardHeaderImg>
    )
};
