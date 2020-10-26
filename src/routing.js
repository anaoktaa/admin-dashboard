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

const Routing =  () => {
    return (
        <Switch>
            <Route exact path='/' component={ElementNavigationMenus} />
            <Route path='/elements/buttons' component={ElementButtons}/>    
            <Route path='/elements/badges' component={ElementBadgesAndLabels}/>    
            <Route path='/elements/cards' component={ElementCards}/>  
            <Route path='/elements/navigation' component={ElementNavigationMenus}/>    
        </Switch>
    )
};

export default Routing;