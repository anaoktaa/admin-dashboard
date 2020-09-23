import React from 'react';
import { Avatar } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

const SearchHeader = ({ showInputSearch, handleShowInputSearch }) => {
    return (
        <div className='header-search-input-container'>
            <input type='text' placeholder='Type to search' className={`header-search-input ${showInputSearch ? 'header-search-input-open' : ''}`} />
            <Avatar onClick={handleShowInputSearch} className={`header-search-button ${showInputSearch ? 'header-search-rotate' : ''}`} size={42}><SearchOutlined /></Avatar>
        </div>
    )
};

export default SearchHeader;