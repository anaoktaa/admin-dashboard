import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SigninPage from './pages/signin/signin.component';
import SigninBoxedPage from './pages/signin-boxed/signin-boxed.component';
import SignupPage from './pages/signup/signup.component';
import SignupBoxed from './pages/signup-boxed/signun-boxed.component';
import ForgotPassword from './pages/forgot-password/forgot-password.component';
import ForgotPasswordBoxed from './pages/forgot-password-boxed/forgot-password-boxed.component';
import ElementButtons from './pages/element-buttons/element-buttons.component';
import ElementCards from './pages/element-cards/element-cards.component';
import ElementBadgesAndLabels from './pages/element-badges-and-labels/element-badges-and-labels.component';
import ElementNavigationMenus from './pages/element-navigation-menus/element-navigation-menus.component';
import ElementTimelines from './pages/element-timelines/element-timelines.component';
import ApplicationsMailbox from './pages/applications-mailbox/applications-mailbox.component';
import ApplicationChat from './pages/applications-chat/applications-chat.component';
import ApplicationFaq from  './pages/applications-faq/applications-faq.component';
import ChartBoxesVariation1 from './pages/chart-boxes/chart-boxes-variation-1/chart-boxes-variation-1.component';
import ChartBoxesVariation2 from './pages/chart-boxes/chart-boxes-variation-2/chart-boxes-variation-2.component';
import ChartBoxesVariation3 from './pages/chart-boxes/chart-boxes-variation-3/chart-boxes-variation-3.component';
import ProfileBoxes from './pages/profile-boxes/profile-boxes.component';
import DashboardAnalytic from './pages/dashboard-analytic/dashboard-analytic.component';

const Routing =  () => {
    return (
        <Switch>
            <Route exact path='/' component={DashboardAnalytic} />
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
            <Route exact path='/dashboard-analytic' component={DashboardAnalytic}/>
        </Switch>
    )
};

export default Routing;