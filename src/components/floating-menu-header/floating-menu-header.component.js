import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import RightMenuHeader from '../right-menu-header/right-menu-header.component';
import SearchHeader from '../search-header/search-header.component';

import { selectFloatingHeaderTools } from '../../redux/application/application.selectors';

import './floating-menu-header.styles.css';

const FloatingMenuHeader = ({ floatingHeader }) => {

    const [showInputSearch, setShowInputSearch] = useState(false);

    const handleShowInputSearch = () => {
        setShowInputSearch(!showInputSearch);
    }

    return (
        <div className={`floating-menu-container ${floatingHeader? 'show-floating-menu' : 'close-floating-menu'}`}>
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

const mapStateToProps = createStructuredSelector ({
    floatingHeader: selectFloatingHeaderTools
});

export default connect(mapStateToProps)(FloatingMenuHeader);