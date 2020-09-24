import React, { useState } from 'react';

import RightMenuHeader from '../right-menu-header/right-menu-header.component';
import SearchHeader from '../search-header/search-header.component';

import './floating-menu-header.styles.css';

const FloatingMenuHeader = () => {

    const [showInputSearch, setShowInputSearch] = useState(false);

    const handleShowInputSearch = () => {
        // if (!foldDrawer && !showInputSearch && actualSize.width <= 1024) {
        //     setFoldDrawer();
        // }
        setShowInputSearch(!showInputSearch);
    }

    return (
        <div className='floating-menu-container'>
            <div className='floating-menu-wrapper'>
                <div className='floating-menu-search-wrapper'>  
                    <SearchHeader 
                        showInputSearch={showInputSearch}
                        handleShowInputSearch={handleShowInputSearch}
                    />
                </div>
                <RightMenuHeader/>
            </div>
        </div>
    )
};

export default FloatingMenuHeader;