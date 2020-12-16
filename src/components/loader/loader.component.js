import React from 'react';

import chunk from 'Assets/gif/chunk.gif';

import { LoaderContainer } from './loader.styles';

const Loader = () => {
    return (
        <LoaderContainer>
            <img src={chunk}/>
        </LoaderContainer>
    )
};

export default Loader;