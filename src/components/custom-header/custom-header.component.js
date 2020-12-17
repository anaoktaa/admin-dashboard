import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Typography, Avatar } from 'antd';

import admindash from '../../assets/logo/admin-dash.png';
import german from '../../assets/logo/german.png';
import './custom-header.styles.css';
import '../../App.css';

import { MenuUnfoldOutlined, GiftOutlined, SettingOutlined,
         MenuOutlined, MoreOutlined, MenuFoldOutlined, CloseOutlined,
         AppstoreOutlined, BellOutlined, RocketOutlined, DownOutlined  } from '@ant-design/icons';

import { selectFoldDrawer, selectMegaMenuToggle, selectSettingHeaderToggle, selectFloatingHeaderTools,
        selectGridDashboardToggle, selectNotifHeaderToggle, selectLangHeaderToggle, selectActiveUserHeaderToggle,
        selectProfileHeaderToggle } from 'Redux_Component/application/application.selectors';
import { setFoldDrawer, setMegaMenuToggle, setSettingHeaderToggle, setFloatingHeaderTools,
        setGridDashboardToggle, setNotifHeaderToggle, setLangHeaderToggle, setActiveUserHeaderToggle,
        setProfileHeaderToggle } from 'Redux_Component/application/application.actions';

import onClickOutside from 'Components/onclick-outside/onclick-outside.component';
import withWindowResize from 'Components/with-window-resize/with-window-resize.component';
import MegaMenu from 'Components/mega-menu/mega-menu.component';
import SettingHeader from 'Components/setting-header/setting-header.component';
import SearchHeader from 'Components/search-header/search-header.component';
import GridMenu from 'Components/grid-menu/grid-menu.component';
import NotifHeader from 'Components/notif-header/notif-header.component';
import LangHeader from 'Components/lang-header/lang-header.component';
import ActiveUserHeader from 'Components/active-user-header/active-user-header.component';
import ProfileHeader from 'Components/profile-header/profile-header.component';

const { Text } = Typography;

const CustomHeader = ({ foldDrawer, setFoldDrawer, megaMenuToggle, setMegaMenuToggle,
                        actualSize, settingMenuToggle, setSettingHeaderToggle,
                        setFloatingHeaderTools, floatingHeader,setGridDashboardToggle,
                        gridMenuToggle, setNotifHeaderToggle, notifMenuToggle,
                        setLangHeaderToggle, langMenuToggle, setActiveUserHeaderToggle,
                        activeUserMenuToggle, setProfileHeaderToggle, profileMenuToggle
                     }) => {
    
    const refMegaMenu = useRef();
    const refSettingMenu = useRef();
    const refGridMenu = useRef();
    const refNotifMenu = useRef();
    const refLangMenu = useRef();
    const refActiveUserMenu = useRef();
    const refProfileMenu = useRef();
    

    const [showInputSearch, setShowInputSearch] = useState(false);

    const handleShowInputSearch = () => {
        if (!foldDrawer && !showInputSearch && actualSize.width <= 1024) {
            setFoldDrawer(false);
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

    const handleSettingMenu = () => {
        setSettingHeaderToggle(!settingMenuToggle);
    }

    const handleFoldDrawer = () => {
        if (showInputSearch && actualSize.width <= 1024) {
            setShowInputSearch(!showInputSearch);
        }
        setFoldDrawer(true);
    }

    const handleUnfoldDrawer = () => {
        setFoldDrawer(false);
    }

    const handleFloatingHeaderTool = () => {
        setFloatingHeaderTools(!floatingHeader);
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
        if (actualSize.width >= 986) {
            if (megaMenuToggle && name === 'megaMenu') {
                setMegaMenuToggle(false);
            }
            else if (settingMenuToggle && name === 'settingMenu') {
                setSettingHeaderToggle(false);
            }
            else if (gridMenuToggle && name === 'gridMenu') {
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

    onClickOutside(refMegaMenu, handleOutsideMenu, 'megaMenu');
    onClickOutside(refSettingMenu, handleOutsideMenu, 'settingMenu');
    onClickOutside(refGridMenu, handleOutsideMenu, 'gridMenu');
    onClickOutside(refNotifMenu, handleOutsideMenu, 'notifMenu');
    onClickOutside(refLangMenu, handleOutsideMenu, 'langMenu');
    onClickOutside(refActiveUserMenu, handleOutsideMenu, 'activeUserMenu');
    onClickOutside(refProfileMenu, handleOutsideMenu, 'profileMenu');

    return (
        <div className={`header-styles-container  ${foldDrawer ? 'header-styles-drawer-open ' : 'header-styles-drawer-close '}`}>
            <div className='desktop-header-view'>
                <div className='flex-space-center'>
                    <div className='header-left-menu'>
                  
                        {
                            foldDrawer?
                            <MenuUnfoldOutlined onClick={handleUnfoldDrawer} className='header-menu-fold-icon' />
                            :
                            <MenuFoldOutlined onClick={handleFoldDrawer} className='header-menu-fold-icon' />
                        }
                        
                        <SearchHeader
                            showInputSearch={showInputSearch}
                            handleShowInputSearch={handleShowInputSearch}
                        />
                        <div ref={refMegaMenu} className='header-link-wrapper'>
                            <Text onClick={handleMegaMenu} className={`header-link-menu ${!foldDrawer || showInputSearch ? 'header-link-menu-hidden' : ''}`} ><GiftOutlined /> Mega Menu</Text>
                            <MegaMenu show={megaMenuToggle} />
                        </div>
 
                        <div ref={refSettingMenu} className='header-link-wrapper'>
                            <Text onClick={handleSettingMenu} className={`header-link-menu ${!foldDrawer || showInputSearch ? 'header-link-menu-hidden' : ''}`} ><SettingOutlined /> Settings</Text>
                            <SettingHeader show={settingMenuToggle}/>
                        </div>
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
            <div className='mobile-tablet-header-view'>
                <div className='header-mobile-menu'>
                    <div className='menu-drawer-icon-container'>
                        <MenuOutlined onClick={handleUnfoldDrawer} className={`${foldDrawer ? 'burger-icon' : 'hidden-burger-icon'}`} />
                        <CloseOutlined onClick={handleFoldDrawer} className={`${foldDrawer? 'close-drawer-icon' : 'show-close-drawer-icon'}`} />
                    </div>
                    <div>
                        <img src={admindash} alt='admin-dash' width='100%' height='100%' />
                    </div>
                    <div onClick={handleFloatingHeaderTool} className='more-outline-wrapper'>
                        <MoreOutlined className='header-menu-more-outlined-icon' />
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    settingMenuToggle: selectSettingHeaderToggle,
    foldDrawer: selectFoldDrawer,
    megaMenuToggle: selectMegaMenuToggle,
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

export default connect(mapStateToProps, mapDispatchToProps)(withWindowResize(CustomHeader));