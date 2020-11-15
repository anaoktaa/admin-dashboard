import React from 'react';
import { Avatar, Typography } from 'antd';
import { RocketOutlined, ThunderboltOutlined, FileTextOutlined, DatabaseOutlined, MessageOutlined } from '@ant-design/icons';

import { CustomCard, CustomCardBody, CustomCardFooter } from  '../../components/custom-card/custom-card.styles';
import { CustomCardHeaderWithImage } from '../../components/custom-card/custom-card-header-with-image.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import ChartBoxVar3 from '../../components/chart-box-var-3/chart-box-var-3.component';
import ChartBoxGridContainer from '../../components/chart-box-grid/chart-box-grid.component';

import './profile-boxes.styles.css';

const { Title, Text } = Typography;

const ProfileBoxes = () => {
    return (
        <div className='grid-3-gap-30'>
            <CustomCard>
                <CustomCardHeaderWithImage backgroundColorOverlay='success'>
                    <div className='flex-column align-items-center'>
                        <Avatar size={55} src='https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' />
                        <div className='padding-top-10'>
                            <Title className='white no-margin-no-padding' level={4}>John Rosenberg</Title>
                            <Text className='white'>Short profile description</Text>
                        </div>
                        <div className='padding-top-10'>
                            <CustomButton variant='solid' color='warning'><strong className='black-gray'>Settings</strong></CustomButton>
                        </div>
                    </div>
                </CustomCardHeaderWithImage>
                <CustomCardBody>
                    <Text className='block margin-bottom-10'>
                        Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                    </Text>
                    <Text className='block margin-bottom-10'>
                        Since the 1500s, when an unknown printer took a galley of type and scrambled.
                    </Text>
                </CustomCardBody>
                <CustomCardFooter>
                    <CustomButton shadow className='mr-10' color='link' variant='dashed'>
                        Cancel
                    </CustomButton>
                    <CustomButton color='primary' variant='solid'>Submit</CustomButton>
                </CustomCardFooter>
            </CustomCard>
            <CustomCard>
                <CustomCardHeaderWithImage imgUrl='https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=679&q=80' backgroundColorOverlay='#4f55b2c4'>
                    <div className='flex-column align-items-center'>
                        <Avatar shape='square' size={55} src='https://images.unsplash.com/photo-1589329482108-e414c7c6b8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' />
                        <div className='padding-top-10'>
                            <Title className='white no-margin-no-padding' level={4}>Ana Simalatupang</Title>
                            <Text className='white'>Short profile description</Text>
                        </div>
                        <div className='padding-top-10'>
                            <CustomButton className='mr-10' color='dark' variant='solid' icon={<ThunderboltOutlined />}/>
                            <CustomButton variant='solid' color='info'><strong>Settings</strong></CustomButton>
                        </div>
                    </div>
                </CustomCardHeaderWithImage>
                <CustomCardBody>
                    <ChartBoxGridContainer col={1} showBoxShadow={false} showBorder={true}>
                        <ChartBoxVar3
                            defaultValue="764k"
                            defaultValueColor='primary'
                            mainTitleText='January Sales'
                            descriptionText='Lorem ipsum dolor'
                        />   
                        <ChartBoxVar3
                            defaultValue='194k'
                            defaultValueColor='warning'
                            mainTitleText='February Sales'
                            descriptionText='Maecenas tempus, tellus'
                        />     
                        <ChartBoxVar3
                            defaultValue="-$54M"
                            defaultValueColor='danger'
                            mainTitleText='March Sales'
                            descriptionText='Donec vitae sapien'
                        /> 
                        <ChartBoxVar3
                            defaultValue="$19M"
                            defaultValueColor='success'
                            mainTitleText='April Sales'
                            descriptionText='Curabitur ullamcorper ultricies'
                        />  
                    </ChartBoxGridContainer>
                </CustomCardBody>
            </CustomCard>
            <CustomCard>
                <CustomCardHeaderWithImage imgUrl='https://images.unsplash.com/photo-1513622790541-eaa84d356909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80' backgroundColorOverlay='#e91e63bf'>
                    <div className='flex-column align-items-center'>
                        <Avatar shape='square' size={55} src='https://images.unsplash.com/photo-1568967729548-e3dbad3d37e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' />
                        <div className='padding-top-10'>
                            <Title className='white no-margin-no-padding' level={4}>Jessica Walberg</Title>
                        </div>
                        <div className='padding-top-10'>
                            <CustomButton variant='solid' className='mr-10' color='success'><strong>Settings</strong></CustomButton>
                            <CustomButton color='warning' variant='solid' icon={<RocketOutlined className='black-gray' />}/>
                        </div>
                    </div>
                </CustomCardHeaderWithImage>
                <CustomCardBody>
                    <div className='fixed-height'>
                        <ul className='nav'>
                            <li className='nav-item'>
                                <a href='#' className='nav-link fw-bold black-gray'>
                                    <div>
                                        <FileTextOutlined className='mr-10'/>
                                        Example File 2
                                    </div>
                                    <div className='margin-left-auto hover-show-only'>
                                        <CustomButton style={style.iconButton} className='mr-10' color='danger' variant='solid' icon={<DatabaseOutlined style={style.icon}/>}/>
                                        <CustomButton style={style.iconButton} color='alt' variant='solid' icon={<MessageOutlined style={style.icon}/>}/>
                                    </div>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link fw-bold black-gray'>
                                    <div>
                                        <FileTextOutlined className='mr-10'/>
                                        Example File 2
                                    </div>
                                    <div className='margin-left-auto hover-show-only'>
                                        <CustomButton style={style.iconButton} className='mr-10' color='danger' variant='solid' icon={<DatabaseOutlined style={style.icon}/>}/>
                                        <CustomButton style={style.iconButton} color='alt' variant='solid' icon={<MessageOutlined style={style.icon}/>}/>
                                    </div>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link fw-bold black-gray'>
                                    <div>
                                        <FileTextOutlined className='mr-10'/>
                                        Example File 2
                                    </div>
                                    <div className='margin-left-auto hover-show-only'>
                                        <CustomButton style={style.iconButton} className='mr-10' color='danger' variant='solid' icon={<DatabaseOutlined style={style.icon}/>}/>
                                        <CustomButton style={style.iconButton} color='alt' variant='solid' icon={<MessageOutlined style={style.icon}/>}/>
                                    </div>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link fw-bold black-gray'>
                                    <div>
                                        <FileTextOutlined className='mr-10'/>
                                        Example File 2
                                    </div>
                                    <div className='margin-left-auto hover-show-only'>
                                        <CustomButton style={style.iconButton} className='mr-10' color='danger' variant='solid' icon={<DatabaseOutlined style={style.icon}/>}/>
                                        <CustomButton style={style.iconButton} color='alt' variant='solid' icon={<MessageOutlined style={style.icon}/>}/>
                                    </div>
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className='nav-link fw-bold black-gray'>
                                    <div>
                                        <FileTextOutlined className='mr-10'/>
                                        Example File 2
                                    </div>
                                    <div className='margin-left-auto hover-show-only'>
                                        <CustomButton style={style.iconButton} className='mr-10' color='danger' variant='solid' icon={<DatabaseOutlined style={style.icon}/>}/>
                                        <CustomButton style={style.iconButton} color='alt' variant='solid' icon={<MessageOutlined style={style.icon}/>}/>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                   
                </CustomCardBody>
                <CustomCardFooter>
                    <CustomButton className='mr-10' variant='no-outlined' color='success'><strong>Remove from list</strong></CustomButton>
                    <CustomButton variant='no-outlined' color='danger'><strong>Send Message</strong></CustomButton>
                </CustomCardFooter>
            </CustomCard>
        </div>
    )
};

export default ProfileBoxes;

const style = {
    icon: {
        fontSize: '10px'
    },
    iconButton: {
        padding: '2px 10px'
    }
}