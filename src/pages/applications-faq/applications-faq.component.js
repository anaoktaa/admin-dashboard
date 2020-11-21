import React, { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import { CustomMenuItemHeader } from 'Components/custom-menu-item/custom-menu-item.styles';
import CustomMenu from 'Components/custom-menu/custom-menu.component';
import CustomMenuItem from 'Components/custom-menu-item/custom-menu-item.component';
import TabExample1 from './tab-example-1.component';
import TabExample2 from './tab-example-2.component';
import TabExample3 from './tab-example-3.component';

import './applications-faq.styles.css';

const ApplicationFaq = () => {
    const [ activeMenuItem, setActiveMenuItem ] = useState({ id: 'TabExample1', name: 'Tab Example 1', content: <TabExample1/>}); 
    const FixedHeaderList = [
        {
            id: 'TabExample1',
            name: 'Tab Example 1',
            content: <TabExample1/>
            
        },
        {
            id: 'TabExample2',
            name: 'Tab Example 2',
            content: <TabExample2/>
        },
        {
            id: 'TabExample3',
            name: 'Tab Example 3',
            content: <TabExample3/>
        }
    ];

    
    const [ chatMenu, setChatMenu ] = useState(false);

    const HandleToggleChatMenu = () => {
        setChatMenu(!chatMenu);
    }

    const handleChooseMenuItem = item => {
        setActiveMenuItem(item);
    }

    return (
        <div className='appliations-faq-container'>
            <div className={`${chatMenu? 'faq-menu-container-show' : 'faq-menu-container'}`}>
                <CustomMenu role='secondary' pill>
                    <CustomMenuItemHeader>
                        Fixed Menu
                    </CustomMenuItemHeader>
                    {
                        FixedHeaderList.map((menuitem) => (
                            <CustomMenuItem onClick={() => handleChooseMenuItem(menuitem)} activeColor='primary' active={menuitem.id === activeMenuItem.id} key={menuitem.id} className='faq-margin-menu-item'>
                                {menuitem.name}
                            </CustomMenuItem>
                        ))
                    }
                </CustomMenu>
            </div>

            <div className={`${chatMenu? 'faq-content-container-show' : 'faq-content-container'}`}>
                <div className='app-faq-mobile'>
                    {
                        chatMenu?
                        <CloseOutlined onClick={HandleToggleChatMenu} style={{fontSize: '20px'}} className={`mr-20 close-menu ${chatMenu? 'show-close-menu' : ''}`}/>
                        :
                        <MenuOutlined onClick={HandleToggleChatMenu} style={{fontSize: '20px'}} className={`mr-20 close-menu ${chatMenu? '' : 'show-close-menu'}`} />
                    }
                </div>
                {activeMenuItem.content}
            </div>
        </div>
    )
};

export default ApplicationFaq;