import React from 'react';
import { Menu } from 'antd';

import DrawerMenuData from './drawer-menu.data';

const { SubMenu } = Menu;

const DrawerMenu = () => {
    return (
        <div>
            <Menu defaultSelectedKeys={['11']} mode="inline">
                {
                    DrawerMenuData.map((parentItem) => (
                        <SubMenu key={parentItem.id} icon={parentItem.icon} title={parentItem.name}>
                            {
                                parentItem.children.map((childrenItem) => (
                                    <Menu.Item key={childrenItem.id}>{childrenItem.name}</Menu.Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        </div>
    )
};

export default DrawerMenu;