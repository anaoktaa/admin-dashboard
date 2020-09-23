import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Typography, Avatar } from 'antd';

import admindash from '../../assets/logo/admin-dash.png';
import german from '../../assets/logo/german.png';
import './custom-header.styles.css';
import '../../App.css';

import { MenuUnfoldOutlined, GiftOutlined, SettingOutlined,
         MenuOutlined, MoreOutlined, AppstoreOutlined,
         BellOutlined, RocketOutlined, DownOutlined } from '@ant-design/icons';

import { selectFoldDrawer, selectMegaMenuToggle, selectSettingHeaderToggle, 
         selectGridDashboardToggle, selectNotifHeaderToggle, selectLangHeaderToggle,
         selectActiveUserHeaderToggle } from '../../redux/application/application.selectors';
import { setFoldDrawer, setMegaMenuToggle, setSettingHeaderToggle, setGridDashboardToggle,
         setNotifHeaderToggle, setLangHeaderToggle, setActiveUserHeaderToggle } from '../../redux/application/application.actions';

import withWindowResize from '../with-window-resize/with-window-resize.component';
import MegaMenu from '../mega-menu/mega-menu.component';
import SettingHeader from '../setting-header/setting-header.component';
import SearchHeader from '../search-header/search-header.component';
import GridMenu from '../grid-menu/grid-menu.component';
import NotifHeader from '../notif-header/notif-header.component';
import LangHeader from '../lang-header/lang-header.component';
import ActiveUserHeader from '../active-user-header/active-user-header.component';

const { Text } = Typography;

const CustomHeader = ({ foldDrawer, setFoldDrawer, megaMenuToggle, setMegaMenuToggle, actualSize,
                        settingMenuToggle, setSettingHeaderToggle, setGridDashboardToggle,
                        gridMenuToggle, setNotifHeaderToggle, notifMenuToggle, setLangHeaderToggle,
                        langMenuToggle, setActiveUserHeaderToggle, activeUserMenuToggle
                     }) => {
    
    const refMegaMenu = useRef(null);
    const refSettingMenu = useRef(null);
    const refGridMenu = useRef(null);
    const refNotifMenu = useRef(null);
    const refLangMenu = useRef(null);
    const refActiveUserMenu = useRef(null);

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

        //Click outside untuk mega menu
        if (refMegaMenu.current && !refMegaMenu.current.contains(event.target) && megaMenuToggle) {
            setMegaMenuToggle(false);
        }

        //Click outside untuk setting menu
        if (refSettingMenu.current && !refSettingMenu.current.contains(event.target) && settingMenuToggle) {
            setSettingHeaderToggle(false);
        }

        //Click outside untuk grid menu
        if (refGridMenu.current && !refGridMenu.current.contains(event.target) && gridMenuToggle) {
            setGridDashboardToggle(false);
        }

        //Click outside untuk notif menu
        if (refNotifMenu.current && !refNotifMenu.current.contains(event.target) && notifMenuToggle) {
            setNotifHeaderToggle(false);
        }

        //Click outside untuk lang menu
        if (refLangMenu.current && !refLangMenu.current.contains(event.target) && langMenuToggle) {
            setLangHeaderToggle(false);
        }

         //Click outside untuk active user menu
         if (refActiveUserMenu.current && !refActiveUserMenu.current.contains(event.target) && activeUserMenuToggle) {
            setActiveUserHeaderToggle(false);
        }

        // if (refLangMenu.current && !refLangMenu.current.contains(event.target) ) {
        //     console.log('ini diluar')
        // }
        // else {
        //     console.log('ini didalam')
        // }
    };

    const handleSettingMenu = () => {
        setSettingHeaderToggle(!settingMenuToggle);
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

    const handleActiveUserMenu = () => {
        setActiveUserHeaderToggle(!activeUserMenuToggle);
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    const handleFoldDrawer = () => {
        if (showInputSearch && actualSize.width <= 1024) {
            setShowInputSearch(!showInputSearch);
        }
        setFoldDrawer();
    }

    return (
        <div className={`header-styles-container  ${foldDrawer ? 'header-styles-drawer-open ' : 'header-styles-drawer-close '}`}>
            <div className='desktop-header-view'>
                <div className='flex-space-center'>
                    <div className='header-left-menu'>
                        <MenuUnfoldOutlined onClick={handleFoldDrawer} className='header-menu-fold-icon' />
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
                        <div className='header-avatar-wrap'>
                            <Avatar size={40} className='profile-header-avatar' src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=356&q=80" />
                            <DownOutlined className='profile-down-icon'/>
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
    megaMenuToggle: selectMegaMenuToggle,
    settingMenuToggle: selectSettingHeaderToggle,
    gridMenuToggle: selectGridDashboardToggle,
    notifMenuToggle: selectNotifHeaderToggle,
    langMenuToggle: selectLangHeaderToggle,
    activeUserMenuToggle: selectActiveUserHeaderToggle
});
  
const mapDispatchToProps = dispatch => ({
    setFoldDrawer: () => dispatch(setFoldDrawer()),
    setMegaMenuToggle: (val) => dispatch(setMegaMenuToggle(val)),
    setSettingHeaderToggle: (val) => dispatch(setSettingHeaderToggle(val)),
    setGridDashboardToggle: (val) => dispatch(setGridDashboardToggle(val)),
    setNotifHeaderToggle: (val) => dispatch(setNotifHeaderToggle(val)),
    setLangHeaderToggle: (val) => dispatch(setLangHeaderToggle(val)),
    setActiveUserHeaderToggle: (val) => dispatch(setActiveUserHeaderToggle(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(withWindowResize(CustomHeader));