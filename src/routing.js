import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SigninPage from 'Pages/signin/signin.component';
import SigninBoxedPage from 'Pages/signin-boxed/signin-boxed.component';
import SignupPage from 'Pages/signup/signup.component';
import SignupBoxed from 'Pages/signup-boxed/signun-boxed.component';
import ForgotPassword from 'Pages/forgot-password/forgot-password.component';
import ForgotPasswordBoxed from 'Pages/forgot-password-boxed/forgot-password-boxed.component';
import ElementButtons from 'Pages/element-buttons/element-buttons.component';
import ElementCards from 'Pages/element-cards/element-cards.component';
import ElementBadgesAndLabels from 'Pages/element-badges-and-labels/element-badges-and-labels.component';
import ElementNavigationMenus from 'Pages/element-navigation-menus/element-navigation-menus.component';
import ElementTimelines from 'Pages/element-timelines/element-timelines.component';
import ApplicationsMailbox from 'Pages/applications-mailbox/applications-mailbox.component';
import ApplicationChat from 'Pages/applications-chat/applications-chat.component';
import ApplicationFaq from  'Pages/applications-faq/applications-faq.component';
import ChartBoxesVariation1 from 'Pages/chart-boxes/chart-boxes-variation-1/chart-boxes-variation-1.component';
import ChartBoxesVariation2 from 'Pages/chart-boxes/chart-boxes-variation-2/chart-boxes-variation-2.component';
import ChartBoxesVariation3 from 'Pages/chart-boxes/chart-boxes-variation-3/chart-boxes-variation-3.component';
import ProfileBoxes from 'Pages/profile-boxes/profile-boxes.component';
import DashboardAnalytic from 'Pages/dashboard-analytic/dashboard-analytic.component';
import DashboardCommerce from 'Pages/dashboard-commerce/dashboard-commerce.component';

const Routing =  () => {
    return (
        <Switch>
            <Route exact path='/' component={DashboardCommerce} />
            <Route exact path='/elements/buttons' component={ElementButtons}/>    
            <Route exact path='/elements/badges' component={ElementBadgesAndLabels}/>    
            <Route exact path='/elements/cards' component={ElementCards}/>  
            <Route exact path='/elements/navigations' component={ElementNavigationMenus}/> 
            <Route exact path='/elements/timelines' component={ElementTimelines}/>   
            <Route exact path='/applications/mailbox' component={ApplicationsMailbox}/>
            <Route exact path='/applications/chat' component={ApplicationChat}/>
            <Route exact path='/applications/faq' component={ApplicationFaq}/>
            <Route exact path='/chart-boxes/variation-1' component={ChartBoxesVariation1}/>
            <Route exact path='/chart-boxes/variation-2' component={ChartBoxesVariation2}/>
            <Route exact path='/chart-boxes/variation-3' component={ChartBoxesVariation3}/>
            <Route exact path='/profile-boxes' component={ProfileBoxes} />
            <Route exact path='/dashboard-analytics' component={DashboardAnalytic}/>
            <Route exact path='/dashboard-commerce' component={DashboardCommerce}/>
        </Switch>
    )
};

export default Routing;