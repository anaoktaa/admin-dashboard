import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Menu } from 'antd';

import DrawerMenuData from './drawer-menu.data';

import { setBreadCrumb, setFoldDrawer } from 'Redux_Component/application/application.actions';

const { SubMenu } = Menu;

const DrawerMenu = ({ history, setBreadCrumb, setFoldDrawer }) => {
    const [ defaultMenuOpen, setDefaultMenuOpen ] = useState('11');

    useEffect(() => {

        const initialMenu = () => {
            const actualLocation = history.location.pathname === '/' ? '/dashboard/analytics' : history.location.pathname ;

            DrawerMenuData.map((item) => {
                if (item.children.length > 0 ) {
                    item.children.map((itemList) => {
                        if (itemList.url === actualLocation) {
                            const arr = [];
                            arr.push(String(itemList.id));
                            setDefaultMenuOpen(arr);
                            setBreadCrumb(itemList);
                        }
                    })
                }
                else {
                    if (item.url === actualLocation ) {
                        const arr = [];
                        arr.push(String(item.id));
                        setDefaultMenuOpen(arr);
                        setBreadCrumb(item);
                    }
                }         
            })
        }
        initialMenu();
    },[setDefaultMenuOpen]);


    const handleRoute = item => {
        setFoldDrawer(true);
        const arr = [];
        arr.push(String(item.id));
        setDefaultMenuOpen(arr);
        setBreadCrumb(item);
        history.push(item.url);
       
    }


    return (
        <div>
            <Menu selectedKeys={defaultMenuOpen} mode="inline">
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

const mapDispatchToProps = dispatch => ({
    setBreadCrumb: (data) => dispatch(setBreadCrumb(data)),
    setFoldDrawer: (data) => dispatch(setFoldDrawer(data)),
})

export default connect(null, mapDispatchToProps)(withRouter(DrawerMenu));