import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Avatar } from 'antd';

import german from '../../assets/logo/german.png';

import { AppstoreOutlined, BellOutlined, RocketOutlined, DownOutlined  } from '@ant-design/icons';

import { selectFloatingHeaderTools, selectGridDashboardToggle, selectNotifHeaderToggle,
        selectLangHeaderToggle, selectActiveUserHeaderToggle, selectProfileHeaderToggle } from '../../redux/application/application.selectors';
import { setFoldDrawer, setMegaMenuToggle, setSettingHeaderToggle, setFloatingHeaderTools,
        setGridDashboardToggle, setNotifHeaderToggle, setLangHeaderToggle, setActiveUserHeaderToggle,
        setProfileHeaderToggle } from '../../redux/application/application.actions';

import onClickOutside from '../onclick-outside/onclick-outside.component';
import withWindowResize from '../with-window-resize/with-window-resize.component';
import SearchHeader from '../search-header/search-header.component';
import GridMenu from '../grid-menu/grid-menu.component';
import NotifHeader from '../notif-header/notif-header.component';
import LangHeader from '../lang-header/lang-header.component';
import ActiveUserHeader from '../active-user-header/active-user-header.component';
import ProfileHeader from '../profile-header/profile-header.component';

import './floating-menu-header.styles.css';

const FloatingMenuHeader = ({ floatingHeader, setGridDashboardToggle,
    gridMenuToggle, setNotifHeaderToggle, notifMenuToggle,
    setLangHeaderToggle, langMenuToggle, setActiveUserHeaderToggle,
    activeUserMenuToggle, setProfileHeaderToggle, profileMenuToggle,
    actualSize }) => {

    const [showInputSearch, setShowInputSearch] = useState(false);
    const refGridMenu = useRef();
    const refNotifMenu = useRef();
    const refLangMenu = useRef();
    const refActiveUserMenu = useRef();
    const refProfileMenu = useRef();

    const handleShowInputSearch = () => {
        setShowInputSearch(!showInputSearch);
    }

    
    const handleGridMenu = () => {
        setGridDashboardToggle(!gridMenuToggle);
    }

    const handleNotifMenu = () => {
        setNotifHeaderToggle(!notifMenuToggle);
    }

    const handleLangMenu = () => {
        setLangHeaderToggle(!langMenuToggle);
    }

    const handleProfileMenu = () => {
        setProfileHeaderToggle(!profileMenuToggle);
    }

    const handleActiveUserMenu = () => {
        setActiveUserHeaderToggle(!activeUserMenuToggle);
    }
    
    const handleOutsideMenu = (name) => {
        if (actualSize.width < 986) {
            if (gridMenuToggle && name === 'gridMenu') {
                setGridDashboardToggle(false);
            }
            else if (notifMenuToggle && name === 'notifMenu') {
                setNotifHeaderToggle(false);
            }
            else if (langMenuToggle && name === 'langMenu') {
                setLangHeaderToggle(false);
            }
            else if (activeUserMenuToggle && name === 'activeUserMenu') {
                setActiveUserHeaderToggle(false);
            }
            else if (profileMenuToggle && name === 'profileMenu') {
                setProfileHeaderToggle(false);
            }
        }
    }

    onClickOutside(refGridMenu, handleOutsideMenu, 'gridMenu');
    onClickOutside(refNotifMenu, handleOutsideMenu, 'notifMenu');
    onClickOutside(refLangMenu, handleOutsideMenu, 'langMenu');
    onClickOutside(refActiveUserMenu, handleOutsideMenu, 'activeUserMenu');
    onClickOutside(refProfileMenu, handleOutsideMenu, 'profileMenu');

    return (
        <div className={`floating-menu-container ${floatingHeader? 'show-floating-menu' : 'close-floating-menu'}`}>
            <div className='floating-menu-wrapper'>
                <div className='floating-menu-search-wrapper'>  
                    <SearchHeader 
                        showInputSearch={showInputSearch}
                        handleShowInputSearch={handleShowInputSearch}
                    />
                </div>
                <div className='header-right-menu'>
                    <div ref={refGridMenu} className='header-avatar-wrap'>
                        <Avatar onClick={handleGridMenu} className='grid-header-avatar' size={40}><AppstoreOutlined /></Avatar>
                        <GridMenu show={gridMenuToggle}/>
                    </div>
                    <div ref={refNotifMenu} className='header-avatar-wrap'>
                        <div onClick={handleNotifMenu} className='notif-header-wrapper'>
                            <Avatar className='notif-header-avatar' size={40}>
                                <BellOutlined />
                            </Avatar>
                            <div className='notif-badge'/>
                        </div>
                        <NotifHeader show={notifMenuToggle}/>
                    </div>
                    <div ref={refLangMenu} className='header-avatar-wrap'>
                        <Avatar onClick={handleLangMenu} size={40} className='lang-header-avatar' icon={<img src={german} alt='lang' style={{width: '65%', height: '65%'}}/>} />
                        <LangHeader show={langMenuToggle}/>
                    </div>
                    <div ref={refActiveUserMenu} className='header-avatar-wrap'>
                        <Avatar onClick={handleActiveUserMenu} size={40} className='user-header-avatar'><RocketOutlined /></Avatar>
                        <ActiveUserHeader show={activeUserMenuToggle}/>
                    </div>
                    <div ref={refProfileMenu} className='header-avatar-wrap'>
                        <Avatar onClick={handleProfileMenu} size={40} className='profile-header-avatar' src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                        <DownOutlined className='profile-down-icon'/>
                        <ProfileHeader show={profileMenuToggle}/>
                    </div>
                    <div className='header-avatar-wrap-column'>
                        <p className='profile-name'>Ana Mariana Simalatupang Ana Mariana Simalatupang Ana Mariana Simalatupang</p>
                        <p className='profile-position'>Software Engineer</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector ({
    floatingHeader: selectFloatingHeaderTools,
    gridMenuToggle: selectGridDashboardToggle,
    notifMenuToggle: selectNotifHeaderToggle,
    langMenuToggle: selectLangHeaderToggle,
    activeUserMenuToggle: selectActiveUserHeaderToggle,
    profileMenuToggle: selectProfileHeaderToggle
});

const mapDispatchToProps = dispatch => ({
    setSettingHeaderToggle: (val) => dispatch(setSettingHeaderToggle(val)),
    setFoldDrawer: (data) => dispatch(setFoldDrawer(data)),
    setMegaMenuToggle: (val) => dispatch(setMegaMenuToggle(val)),
    setFloatingHeaderTools: (val) => dispatch(setFloatingHeaderTools(val)),
    setGridDashboardToggle: (val) => dispatch(setGridDashboardToggle(val)),
    setNotifHeaderToggle: (val) => dispatch(setNotifHeaderToggle(val)),
    setLangHeaderToggle: (val) => dispatch(setLangHeaderToggle(val)),
    setActiveUserHeaderToggle: (val) => dispatch(setActiveUserHeaderToggle(val)),
    setProfileHeaderToggle: (val) => dispatch(setProfileHeaderToggle(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(withWindowResize(FloatingMenuHeader));