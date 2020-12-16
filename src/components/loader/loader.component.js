import React from 'react';

import chunk from 'Assets/gif/chunk.gif';

import { LoaderContainer } from './loader.styles';

const Loader = () => {
    return (
        <LoaderContainer>
            <img src={chunk}/><br/>
            <p className='color5d no-margin-no-padding'>Please wait while we load all the components examples</p>
            <p className='color98'>Because this is a demonstration, we load at once all the Dashboards examples. This wouldn't happen in a real live app!</p>
        </LoaderContainer>
    )
};

export default Loader;