import React, { useEffect, useState } from 'react';

import './custom-tabs-wrapper.styles.css';

const CustomTabsWrapper = ({ children, ...props }) => {
    const [ activeKey, setActiveKey ] = useState(null);  
    const [ width, setWidth ] = useState(0); 
    const [ left, setLeft ] = useState(0);

    const findActualLeft = (nodes, currentActiveNode) => {
        //Finding width
        let findActivePanel = false;
        let initial = 0;
        let allWidth = 0;
        while (!findActivePanel) {
            if (nodes[initial].classList.length > 1) {
                setActiveKey(initial);
                findActivePanel = true;                
            }
            allWidth = allWidth + nodes[initial].offsetWidth;
            initial++;
        }
        setLeft(allWidth - currentActiveNode.offsetWidth);
    }

    useEffect(() => {
        const getClassName = () => {    
            const listTabPanel = document.getElementsByClassName('tab-panel');
            const tabsContainer = document.getElementById('regular-tabs');
            let activeNode = null;
            const activeKey = tabsContainer.dataset.activeKey;
            for (let i =0; i <listTabPanel.length; i++) {
                if (listTabPanel[i].dataset.key === activeKey) {
                    listTabPanel[i].classList.add('tab-panel-active'); 
                    activeNode = listTabPanel[i];
                    setWidth(listTabPanel[i].offsetWidth);
                }
            }
            findActualLeft(listTabPanel, activeNode);
        }

        getClassName();
    }, []);

    const handleChooseActiveTab = event => {
        let target = event.target;
        let li = target.closest('li');
        let nodes = Array.from( li.closest('ul').children );
        let allWidth = 0;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].classList.length > 1) {
                nodes[i].classList.remove('tab-panel-active');
            }
            allWidth = nodes[i].offsetWidth + allWidth;
        }
        setWidth(li.offsetWidth);
        li.classList.add('tab-panel-active');
  
        //Finding width
        findActualLeft(nodes, li);
    }

    return (
        <div>
            <ul 
                onClick={handleChooseActiveTab} 
                id='regular-tabs' 
                name='regular-tabs' 
                className='tabs-container'
                {...props}>
                {children}
                <div style={{width: `${width}px`, left: `${left}px`}} className='tab-active-overlay'></div>
            </ul>
            {children.map((item, index) => {
                if (Number(index) === Number(activeKey)) {
                    return (
                        <div>
                            {item.props.children}
                        </div>
                    )
                }
            })}
        </div>
    )
};

export default CustomTabsWrapper;