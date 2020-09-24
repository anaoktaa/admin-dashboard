import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Avatar } from 'antd';

import german from '../../assets/logo/german.png';
import '../custom-header/custom-header.styles.css';
import '../../App.css';
import './right-menu-header.styles.css';

import { AppstoreOutlined, BellOutlined, RocketOutlined, DownOutlined } from '@ant-design/icons';

import { selectSettingHeaderToggle, selectGridDashboardToggle, selectNotifHeaderToggle,
         selectLangHeaderToggle, selectActiveUserHeaderToggle, selectProfileHeaderToggle } from '../../redux/application/application.selectors';
import { setSettingHeaderToggle, setGridDashboardToggle,
         setNotifHeaderToggle, setLangHeaderToggle, setActiveUserHeaderToggle,
         setProfileHeaderToggle } from '../../redux/application/application.actions';

import GridMenu from '../grid-menu/grid-menu.component';
import NotifHeader from '../notif-header/notif-header.component';
import LangHeader from '../lang-header/lang-header.component';
import ActiveUserHeader from '../active-user-header/active-user-header.component';
import ProfileHeader from '../profile-header/profile-header.component';

const RightMenuHeader = ({ setGridDashboardToggle,gridMenuToggle, setNotifHeaderToggle, 
    notifMenuToggle, setLangHeaderToggle, langMenuToggle, setActiveUserHeaderToggle,
    activeUserMenuToggle, setProfileHeaderToggle, profileMenuToggle }) => {

    const refGridMenu = useRef(null);
    const refNotifMenu = useRef(null);
    const refLangMenu = useRef(null);
    const refActiveUserMenu = useRef(null);
    const refProfileMenu = useRef(null);
    
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

    const handleClickOutside = event => {

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
        
        //Click outside untuk profile menu
        if (refProfileMenu.current && !refProfileMenu.current.contains(event.target) && profileMenuToggle) {
            setProfileHeaderToggle(false);
        }

    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return (
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
    )
};
const mapStateToProps = createStructuredSelector({
    gridMenuToggle: selectGridDashboardToggle,
    notifMenuToggle: selectNotifHeaderToggle,
    langMenuToggle: selectLangHeaderToggle,
    activeUserMenuToggle: selectActiveUserHeaderToggle,
    profileMenuToggle: selectProfileHeaderToggle
});
  
const mapDispatchToProps = dispatch => ({
    setGridDashboardToggle: (val) => dispatch(setGridDashboardToggle(val)),
    setNotifHeaderToggle: (val) => dispatch(setNotifHeaderToggle(val)),
    setLangHeaderToggle: (val) => dispatch(setLangHeaderToggle(val)),
    setActiveUserHeaderToggle: (val) => dispatch(setActiveUserHeaderToggle(val)),
    setProfileHeaderToggle: (val) => dispatch(setProfileHeaderToggle(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(RightMenuHeader);