import React from 'react';
import { Menu } from 'antd';

import './lang-header.styles.css';
import '../right-menu-header/right-menu-header.styles.css';
import '../../App.css';

import germany from '../../assets/flag/germany.png';
import indonesia from '../../assets/flag/indonesia.png';
import italy from '../../assets/flag/italy.png';
import usa from '../../assets/flag/usa.png';

const LangHeader = ({ show }) => {
    return (
        <div className={`floating-menu card-container header-lang-menu ${show? 'floating-menu-show' : 'floating-menu-close'}`}>
            <div className='card-header-container header-lang-menu-header'>
                <div className='card-header-overlay header-lang-menu-overlay'>
                    <p className='card-header-desc'>
                        Choose language
                    </p>
                </div>
            </div>
            <div className='header-lang-body'>
                <p className='capitalize-color keyframes'>Popular Languages</p>
                <Menu>
                    <Menu.Item>
                        <div className='lhc-menu-item-content'>
                            <div className='lhc-lang-img-container'>
                                <img src={indonesia} alt='indonesia' width='100%' height='100%'/>
                            </div>
                            <p>Indonesia</p>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className='lhc-menu-item-content'>
                            <div className='lhc-lang-img-container'>
                                <img src={usa} alt='usa' width='100%' height='100%'/>
                            </div>
                            <p>USA</p>
                        </div>
                    </Menu.Item>
                </Menu>
                <div className='lhc-line'/>
                <p className='capitalize-color keyframes'>Others Languages</p>
                <Menu>
                    <Menu.Item>
                        <div className='lhc-menu-item-content'>
                            <div className='lhc-lang-img-container'>
                                <img src={germany} alt='germany' width='100%' height='100%'/>
                            </div>
                            <p>Germany</p>
                        </div>
                    </Menu.Item>
                    <Menu.Item>
                        <div className='lhc-menu-item-content'>
                            <div className='lhc-lang-img-container'>
                                <img src={italy} alt='italy' width='100%' height='100%'/>
                            </div>
                            <p>Italy</p>
                        </div>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
};

export default LangHeader;