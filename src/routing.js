import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomBreadcrumb from 'Components/custom-breadcrumb/custom-breadcrumb.component';
import CustomHeader from 'Components/custom-header/custom-header.component';
import CustomDrawer from 'Components/custom-drawer/custom-drawer.component';
import FloatingMenuHeader from 'Components/floating-menu-header/floating-menu-header.component';

import { selectFoldDrawer } from 'Redux_Component/application/application.selectors';

import { DashboardAnalyticPage, DashboardCommercePage, DashboardCrmPage, DashboardSalesPage,
        ElementBadgesAndLabelsPage, ElementButtonsPage, ElementCardsPage,
        ElementNavigationMenusPage, ElementTimelinesPage, ApplicationChatPage, 
        ApplicationFaqPage, ApplicationsMailboxPage, ChartBoxesVariation1Page,
        ChartBoxesVariation2Page, ChartBoxesVariation3Page, ProfileBoxesPage,
        SigninBoxedPage, SigninPage, SignupBoxedPage, SignupPage,
        ForgotPasswordBoxedPage, ForgotPasswordPage } from 'Loader/loader.component';

const Routing =  ({ foldDrawer }) => {

    return (
        <Switch>
            <Route exact path='/pages/login' component={SigninPage}/>
            <Route exact path='/pages/login-boxed' component={SigninBoxedPage}/> 
            <Route exact path='/pages/register' component={SignupPage}/>
            <Route exact path='/pages/register-boxed' component={SignupBoxedPage}/>  
            <Route exact path='/pages/forgot-password' component={ForgotPasswordPage}/>
            <Route exact path='/pages/forgot-password-boxed' component={ForgotPasswordBoxedPage}/>  
            <div>
                
                <CustomDrawer />
                <CustomHeader/>
                <FloatingMenuHeader/>
                <div className={`content-container ${foldDrawer ? 'content-fold-close' : 'content-fold-open'}`}>
                    <CustomBreadcrumb/>
                    <div className='app-body-container'>
                        <Route exact path='/' component={DashboardAnalyticPage} />
                        <Route exact path='/elements/buttons' component={ElementButtonsPage}/>    
                        <Route exact path='/elements/badges' component={ElementBadgesAndLabelsPage}/>    
                        <Route exact path='/elements/cards' component={ElementCardsPage}/>  
                        <Route exact path='/elements/navigations' component={ElementNavigationMenusPage}/> 
                        <Route exact path='/elements/timelines' component={ElementTimelinesPage}/>   
                        <Route exact path='/applications/mailbox' component={ApplicationsMailboxPage}/>
                        <Route exact path='/applications/chat' component={ApplicationChatPage}/>
                        <Route exact path='/applications/faq' component={ApplicationFaqPage}/>
                        <Route exact path='/chart-boxes/variation-1' component={ChartBoxesVariation1Page}/>
                        <Route exact path='/chart-boxes/variation-2' component={ChartBoxesVariation2Page}/>
                        <Route exact path='/chart-boxes/variation-3' component={ChartBoxesVariation3Page}/>
                        <Route exact path='/profile-boxes' component={ProfileBoxesPage} />
                        <Route exact path='/dashboard/analytics' component={DashboardAnalyticPage}/>
                        <Route exact path='/dashboard/commerce' component={DashboardCommercePage}/>
                        <Route exact path='/dashboard/sales' component={DashboardSalesPage}/>
                        <Route exact path='/dashboard/crm' component={DashboardCrmPage}/>
                    </div>
                </div>
            </div> 
        </Switch>
    )
};
const mapStateToProps = createStructuredSelector({
    foldDrawer: selectFoldDrawer,
});

export default connect(mapStateToProps)(Routing);;
