import React from 'react';
import { connect } from 'react-redux'; 
import { Typography } from 'antd';
import { createStructuredSelector } from 'reselect';
import { PieChartTwoTone, HomeOutlined } from '@ant-design/icons';

import { selectBreadCrumb } from 'Redux_Component/application/application.selectors';

import './custom-breadcrumb.styles.css';


const { Link, Text } = Typography;

const CustomBreadcrumb = ({ breadCrumb }) => {

    const locationArr = breadCrumb? breadCrumb.url.split("/") : [];

    console.log('lokasi breadcrumb', locationArr.slice(1));
    return (
        <div className='app-theme-container'>
            <div className='app-theme-icon-wrapper'>
                <div className='bg-icon-gradient-ripple'>
                    {breadCrumb? breadCrumb.icon : null}
                    {/* <PieChartTwoTone twoToneColor="#9adec2" /> */}
                </div>
            </div>
            <div className='app-theme-text-container'>
                <p className='app-theme-title-main'>{breadCrumb ? breadCrumb.title : null}</p>
                <Text type="secondary">
                    {breadCrumb? breadCrumb.description : null}
                </Text>
            </div>
            <div className='app-theme-breadcrumb-container'>
                <Link href="https://ant.design" target="_blank">
                    {breadCrumb? breadCrumb.icon : null} &nbsp;
                </Link>
                {
                    locationArr.map((path, index) => {
                        if (index !== locationArr.length - 1 ) {
                            return (
                                <Link href="https://ant.design" target="_blank" style={{textTransform: 'capitalize'}}>
                                    {path} / &nbsp;
                                </Link>
                            )
                        }
                        else {
                            return (
                                <Text style={{textTransform: 'capitalize'}}>
                                    {path}
                                </Text>
                            )
                        }
                    })
                }
            
          
            </div>
        </div>       
    )
};

const mapStateToProps = createStructuredSelector ({
    breadCrumb : selectBreadCrumb
});

export default connect(mapStateToProps)(CustomBreadcrumb);