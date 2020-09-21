import React, { useState, useRef, useEffect } from 'react';
import { Avatar, Typography } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import admindash from '../../assets/logo/admin-dash.png';
import './custom-header.styles.css';

import { MenuUnfoldOutlined, SearchOutlined, GiftOutlined, SettingOutlined,
         MenuOutlined, MoreOutlined, ContactsOutlined, ContainerOutlined,
         PictureOutlined, DashboardOutlined } from '@ant-design/icons';

import { selectFoldDrawer, selectMegaMenuToggle } from '../../redux/application/application.selectors';
import { setFoldDrawer, setMegaMenuToggle } from '../../redux/application/application.actions';

const { Text, Title } = Typography;

const CustomHeader = ({ foldDrawer, setFoldDrawer, megaMenuToggle, setMegaMenuToggle }) => {
    
    const refdul = useRef(null);

    const [showInputSearch, setShowInputSearch] = useState(false);

    const handleShowInputSearch = () => {
        if (!foldDrawer && !showInputSearch && actualSize.width <= 1024) {
            setFoldDrawer();
        }
        setShowInputSearch(!showInputSearch);
    }

    const handleMegaMenu = () => {
        if (!megaMenuToggle) {
            setMegaMenuToggle(!megaMenuToggle);
        }
        else {
            setMegaMenuToggle(!megaMenuToggle);
        }
    }

    const handleClickOutside = event => {
        if (refdul.current && !refdul.current.contains(event.target)) {
            setMegaMenuToggle(false);
        }
        else {
            console.log('didalam')
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    const handleFoldDrawer = () => {
        setFoldDrawer();
    }

    return (
        <div className={`header-styles-container  ${foldDrawer ? 'header-styles-drawer-open ' : 'header-styles-drawer-close '}`}>
            <div className='desktop-header-view'>
                <div className='flex-space-center'>
                    <div className='header-left-menu'>
                        <MenuUnfoldOutlined onClick={handleFoldDrawer} className='header-menu-fold-icon' />
                        <div className='header-search-input-container'>
                            <input type='text' placeholder='Type to search' className={`header-search-input ${showInputSearch ? 'header-search-input-open' : ''}`} />
                            <Avatar onClick={handleShowInputSearch} className={`header-search-button ${showInputSearch ? 'header-search-rotate' : ''}`} size={42}><SearchOutlined /></Avatar>
                        </div>
                        <div ref={refdul} className='header-link-wrapper'>
                            <Text onClick={handleMegaMenu} className={`header-link-menu ${!foldDrawer || showInputSearch ? 'header-link-menu-hidden' : ''}`} ><GiftOutlined /> Mega Menu</Text>
                            <div className={`mega-menu-container ${megaMenuToggle? 'mmc-show' : 'mmc-hidden'}`}>
                                <div className='mega-menu-tooltip'/>
                                <div className='mega-menu-content'>
                                    <div className='mega-menu-overview'>
                                        <Title level={5}>Overview</Title>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'><ContactsOutlined className='mega-menu-icon' />Contacts</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'><ContainerOutlined className='mega-menu-icon'/>Incidents</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'><PictureOutlined className='mega-menu-icon'/>Companies</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'><DashboardOutlined className='mega-menu-icon'/>Dashboard</a>
                                        </div>
                                    </div>
                                    <div className='mega-menu-overview'>
                                        <Title level={5}>Favourites</Title>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Report Conversions</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Quick Start</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Users & Groups</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Properties</a>
                                        </div>
                                    </div>
                                    <div className='mega-menu-overview'>
                                        <Title level={5}>Sales & Marketing</Title>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Resource Groups</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Goal Metrics</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Campaign</a>
                                        </div>
                                        <div className='mega-menu-content-wrap'>
                                            <a href='#'>Queues</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
 
                        <div className='header-link-wrapper'>
                            <Text className={`header-link-menu ${!foldDrawer || showInputSearch ? 'header-link-menu-hidden' : ''}`} ><SettingOutlined /> Settings</Text>
                        </div>
                    </div>
                    <div className='header-right-menu'>
                        ini right
                    </div>
                </div>
            </div>
            <div className='mobile-tablet-header-view'>
                <div className='header-mobile-menu'>
                    <MenuOutlined onClick={handleFoldDrawer} className='header-menu-fold-icon' />
                    <div>
                        <img src={admindash} alt='admin-dash' width='100%' height='100%' />
                    </div>
                    <div className='more-outline-wrapper'>
                        <MoreOutlined className='header-menu-more-outlined-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer,
    megaMenuToggle: selectMegaMenuToggle
});
  
const mapDispatchToProps = dispatch => ({
    setFoldDrawer: () => dispatch(setFoldDrawer()),
    setMegaMenuToggle: (val) => dispatch(setMegaMenuToggle(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);