import React from 'react';
import { Typography } from 'antd';

import CustomTimeline from '../../../components/custom-timeline/custom-timeline.component';
import CustomTimelineItem from  '../../../components/custom-timeline-item/custom-timeline-item.component';
import CustomLabelBadge from '../../../components/custom-label-badge/custom-label-badge.component';

import { CustomCard, CustomCardBody, CustomCardTitleText } from  '../../../components/custom-card/custom-card.styles';

const { Text } = Typography;

const DotBadgesContainer = () => {
    return ( 
        <div className='grid-2-gap-30'>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        COLORFUL DOTS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomTimeline size='small'>
                            <CustomTimelineItem color='danger'>
                                All Hands Meeting
                            </CustomTimelineItem>
                            <CustomTimelineItem color='warning'>
                               Yet another one, <Text type="success"> at 10.30 AM</Text> 
                            </CustomTimelineItem>
                            <CustomTimelineItem color='success'>
                                Build the productions release 
                                <CustomLabelBadge style={{marginLeft: '20px'}} color='danger'>
                                    NEW
                                </CustomLabelBadge>
                            </CustomTimelineItem>
                            <CustomTimelineItem color='primary'>
                                Something not important
                            </CustomTimelineItem>
                            <CustomTimelineItem color='info'>
                                This dot has an info state
                            </CustomTimelineItem>
                            <CustomTimelineItem color='dark'>
                                This dot has dark state
                            </CustomTimelineItem>
                        </CustomTimeline>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        BASICS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomTimeline size='regular'>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">11.00 PM</Text>
                                } 
                                color='success'>
                                <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">12.00 PM</Text>
                                } 
                                color='warning'>
                                <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">15.00 PM</Text>
                                } 
                                color='danger'>
                                <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">12.00 PM</Text>
                                } 
                                color='primary'>
                                <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">11.00 PM</Text>
                                } 
                                color='success'>
                                <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">12.00 PM</Text>
                                } 
                                color='warning'>
                                <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">15.00 PM</Text>
                                } 
                                color='danger'>
                                <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">12.00 PM</Text>
                                } 
                                color='primary'>
                                <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">11.00 PM</Text>
                                } 
                                color='success'>
                                <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">12.00 PM</Text>
                                } 
                                color='warning'>
                                <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">15.00 PM</Text>
                                } 
                                color='danger'>
                                <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                label={
                                    <Text className='fs-12' type="secondary">12.00 PM</Text>
                                } 
                                color='primary'>
                                <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                        </CustomTimeline>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        SIMPLE DOTS
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomTimeline size='small'>
                            <CustomTimelineItem>
                                All Hands Meeting
                            </CustomTimelineItem>
                            <CustomTimelineItem>
                               Yet another one, <Text type="success"> at 10.30 AM</Text> 
                            </CustomTimelineItem>
                            <CustomTimelineItem>
                                Build the productions release 
                            </CustomTimelineItem>
                            <CustomTimelineItem>
                                <Text type="success">Something not important</Text>
                            </CustomTimelineItem>
                        </CustomTimeline>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>
                        WITHOUT TIME
                    </CustomCardTitleText>
                    <CustomCardBody>
                        <CustomTimeline size='regular'>
                            <CustomTimelineItem 
                                color='success'>
                                <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='warning'>
                                <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='danger'>
                                <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='primary'>
                                <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='success'>
                                <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='warning'>
                                <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='danger'>
                                <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='primary'>
                                <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='success'>
                                <Text className='uppercase fs-14 fw-bold'>All hands meeting</Text>
                                <p className='no-margin-no-padding'>Lorem ipsum dolor sit amet, today at  <Text type="warning">11.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='warning'>
                                <p className='no-margin-no-padding'>Another meeting today, at <Text type="danger" className='fw-bold'>12.00 PM</Text></p>
                                <p className='no-margin-no-padding'>Yet another one, at <Text type="success">15.00 PM</Text></p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='danger'>
                                <Text className='uppercase fs-14 fw-bold'>Build the production release</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                            <CustomTimelineItem 
                                color='primary'>
                                <Text type="success" className='uppercase fs-14 fw-bold'>Something not important</Text>
                                <p className='no-margin-no-padding'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis 
                                </p>
                            </CustomTimelineItem>
                        </CustomTimeline>
                    </CustomCardBody>
                </CustomCard>
            </div>
        </div>
    )
};

export default DotBadgesContainer;