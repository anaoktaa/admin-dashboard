import React from 'react';
import { Menu } from 'antd';
import { withRouter } from 'react-router';

import DrawerMenuData from './drawer-menu.data';

const { SubMenu } = Menu;

const DrawerMenu = ({ history }) => {

    const handleRoute = item => {
        history.push(item.url);
    }

    return (
        <div>
            <Menu defaultSelectedKeys={['11']} mode="inline">
                {
                    DrawerMenuData.map((parentItem) => {
                        if (parentItem.children.length === 0) {
                            return (
                                <Menu.Item icon={parentItem.icon} onClick={() => handleRoute(parentItem)} key={parentItem.id}>{parentItem.name}</Menu.Item>
                            )
                        }
                        else {
                            return (
                                <SubMenu key={parentItem.id} icon={parentItem.icon} title={parentItem.name}>
                                    {
                                        parentItem.children.map((childrenItem) => (
                                            <Menu.Item onClick={() => handleRoute(childrenItem)} key={childrenItem.id}>{childrenItem.name}</Menu.Item>
                                        ))
                                    }
                                </SubMenu>
                            )
                        }
                       
                    })
                }
            </Menu>
        </div>
    )
};

export default withRouter(DrawerMenu);