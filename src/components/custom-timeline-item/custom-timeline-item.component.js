import React from 'react';

import { NoLabelTimeline, IconTimeline, ConnectorTimeLine, LabelTimeLine } from './custom-timeline-item.styles';

import './custom-timeline-item.styles.css';

const CustomTimelineItem = ({ color, dot, label, size, children, fill,...props }) => {
    if (label) {
        return (
            <LabelTimeLine>
                <div className='flex-column align-items-center'>
                    {label}
                </div>
                <div className='timeline-icon-container'>
                    <IconTimeline color={color} size={size}/>
                    <ConnectorTimeLine/>
                </div>
                <div className='padding-bottom-20'> 
                    {children}
                </div>
            </LabelTimeLine>
        )
    }
    else {
        if (dot) {
            return (
                <NoLabelTimeline>
                    <div className='timeline-icon-container'>
                        <IconTimeline fill={fill} color={color} size='large'>
                            {dot}
                        </IconTimeline>
                        <ConnectorTimeLine style={{width: '6px'}}/>
                    </div>
                    <div className='padding-bottom-30'> 
                        {children}
                    </div>
                </NoLabelTimeline>
            )
        }
        else {
            return (
                <NoLabelTimeline>
                    <div className='timeline-icon-container'>
                        <IconTimeline color={color} size={size}/>
                        <ConnectorTimeLine/>
                    </div>
                    <div className='padding-bottom-20'> 
                        {children}
                    </div>
                </NoLabelTimeline>
            )
        }
      
    }
   
};

export default CustomTimelineItem;