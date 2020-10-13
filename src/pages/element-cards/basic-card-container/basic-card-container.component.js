import React from 'react';
import { Typography } from 'antd';

import { CustomCard, CustomCardBody, CustomCardTitleText, CustomCardSubtitle } from '../../../components/custom-card/custom-card.styles';
import CustomButton from '../../../components/custom-button/custom-button.component';

const { Text, Link } = Typography;

const BasicCardContainer = () => {
    return (
        <div className='grid-3-gap-30'>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>BASIC EXAMPLE</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>CARD WITH SUBTITLE</CustomCardTitleText>
                    <CustomCardBody>
                        <CustomCardSubtitle> 
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor.
                        </CustomCardSubtitle>
                        <p>
                            Cum sociis natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </p>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>SPECIAL TITLE TREATMENT</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                            sagittis magna. Sed consequat, leo eget bibendum sodales,
                            augue velit cursus nunc,
                        </p>   
                        <CustomButton color='primary' variant='solid' block>Go Somewhere</CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText className='ta-center'>SPECIAL TITLE TREATMENT</CustomCardTitleText>
                    <CustomCardBody>
                        <div className='ta-center'>
                            <p>
                                Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                                sagittis magna. Sed consequat, leo eget bibendum sodales,
                                augue velit cursus nunc,
                            </p>  
                        </div>
                        <CustomButton color='danger' variant='solid' block>Go Somewhere</CustomButton>
                    </CustomCardBody>
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText className='ta-right'>SPECIAL TITLE TREATMENT</CustomCardTitleText>
                    <CustomCardBody>
                        <div className='ta-right'>
                            <p>
                                Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
                                sagittis magna. Sed consequat, leo eget bibendum sodales,
                                augue velit cursus nunc,
                            </p>
                        </div>
                        <CustomButton color='dark' variant='outlined' block>Go Somewhere</CustomButton>
                    </CustomCardBody>
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>BASIC EXAMPLE</CustomCardTitleText>
                    <CustomCardBody>
                        <CustomCardSubtitle> 
                            Card subtitle
                        </CustomCardSubtitle>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            tellus eget condimentum rhoncus.
                        </p>
                        <CustomButton variant='solid' color='secondary'>Button</CustomButton>
                    </CustomCardBody>            
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>BASIC EXAMPLE</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            tellus eget condimentum rhoncus.
                        </p>
                        <p className='super-small-text'>Updated 3 minutes ago</p>
                    </CustomCardBody>            
                </CustomCard>
            </div>
            <div>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>BASIC EXAMPLE</CustomCardTitleText>
                    <CustomCardBody>
                        <CustomCardSubtitle> 
                            Card subtitle
                        </CustomCardSubtitle>
                    </CustomCardBody>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            tellus eget condimentum rhoncus.&nbsp;
                        </p>
                        <Link href="https://ant.design" target="_blank">
                            Card Link &nbsp;
                        </Link>
                        <Link href="https://ant.design" target="_blank">
                            Another Link
                        </Link>
                    </CustomCardBody>            
                </CustomCard>
                <CustomCard className='mb-30'>
                    <CustomCardTitleText>BASIC EXAMPLE</CustomCardTitleText>
                    <CustomCardBody>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            tellus eget condimentum rhoncus.
                        </p>
                        <p className='super-small-text'>Updated 3 minutes ago</p>
                    </CustomCardBody>            
                </CustomCard>
            </div>
        </div>
    )
};

export default BasicCardContainer;