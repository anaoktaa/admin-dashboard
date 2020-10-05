import React, { useEffect, useState, useRef } from 'react';

import withWindowResize from '../with-window-resize/with-window-resize.component';

import './custom-tabs-wrapper.styles.css';

const CustomTabsWrapper = ({ actualSize, children, ...props }) => {
    const [ activeKey, setActiveKey ] = useState(null);  
    const [ width, setWidth ] = useState(0); 
    const [ left, setLeft ] = useState(0);
    const ref = useRef(null);

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


    useEffect(() => {
        const handleShowArrowTab = () => {
            console.log('ACTUAL SIZE', actualSize.width);
        }

        handleShowArrowTab();
    }, [actualSize.width]);

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

    const handleScrolTab = () => {
        inputRef.current[7].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    const inputRef = useRef([]);

    return (
        <div>
            <ul 
                ref={ref}
                onClick={handleChooseActiveTab} 
                id='regular-tabs' 
                name='regular-tabs' 
                className='tabs-container'
                {...props}>
                {children.map((child) => (
                    <li 
                        key={child.props['data-key']} 
                        data-key={child.props['data-key']}
                        className='tab-panel'
                        ref={el => inputRef.current[child.props['data-key']] = el}>
                        {child.props.title}
                    </li>
                ))}
                <div style={{width: `${width}px`, left: `${left}px`}} className='tab-active-overlay'></div>
            </ul>
            <button onClick={handleScrolTab}> scrol </button>
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

export default withWindowResize(CustomTabsWrapper);