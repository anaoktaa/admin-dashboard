import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Typography } from 'antd';

import admindash from '../../assets/logo/admin-dash.png';
import './custom-header.styles.css';
import '../../App.css';

import { MenuUnfoldOutlined, GiftOutlined, SettingOutlined,
         MenuOutlined, MoreOutlined } from '@ant-design/icons';

import { selectFoldDrawer, selectMegaMenuToggle, selectSettingHeaderToggle, selectFloatingHeaderTools } from '../../redux/application/application.selectors';
import { setFoldDrawer, setMegaMenuToggle, setSettingHeaderToggle, setFloatingHeaderTools } from '../../redux/application/application.actions';

import withWindowResize from '../with-window-resize/with-window-resize.component';
import MegaMenu from '../mega-menu/mega-menu.component';
import SettingHeader from '../setting-header/setting-header.component';
import SearchHeader from '../search-header/search-header.component';
import RightMenuHeader from '../right-menu-header/right-menu-header.component';

const { Text } = Typography;

const CustomHeader = ({ foldDrawer, setFoldDrawer, megaMenuToggle, setMegaMenuToggle,
                        actualSize, settingMenuToggle, setSettingHeaderToggle,
                        setFloatingHeaderTools, floatingHeader
                     }) => {
    
    const refMegaMenu = useRef(null);
    const refSettingMenu = useRef(null);

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

    };

    const handleSettingMenu = () => {
        setSettingHeaderToggle(!settingMenuToggle);
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

    const handleFloatingHeaderTool = () => {
        setFloatingHeaderTools(!floatingHeader);
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
                    <RightMenuHeader/>
                </div>
            </div>
            <div className='mobile-tablet-header-view'>
                <div className='header-mobile-menu'>
                    <MenuOutlined onClick={handleFoldDrawer} className='header-menu-fold-icon' />
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
    floatingHeader: selectFloatingHeaderTools
});
  
const mapDispatchToProps = dispatch => ({
    setSettingHeaderToggle: (val) => dispatch(setSettingHeaderToggle(val)),
    setFoldDrawer: () => dispatch(setFoldDrawer()),
    setMegaMenuToggle: (val) => dispatch(setMegaMenuToggle(val)),
    setFloatingHeaderTools: (val) => dispatch(setFloatingHeaderTools(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(withWindowResize(CustomHeader));