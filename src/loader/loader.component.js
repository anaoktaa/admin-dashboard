import Loadable from 'react-loadable';
import Loader from 'Components/loader/loader.component';

export const DashboardAnalyticPage = Loadable({
  loader: () =>
    import('../pages/dashboard-analytic/dashboard-analytic.component'),
  loading: Loader,
});

export const DashboardCommercePage = Loadable({
  loader: () =>
    import('../pages/dashboard-commerce/dashboard-commerce.component'),
  loading: Loader,
});

export const DashboardSalesPage = Loadable({
  loader: () => import('../pages/dashboard-sales/dashboard-sales.component'),
  loading: Loader,
});

export const DashboardCrmPage = Loadable({
  loader: () => import('../pages/dashboard-crm/dashboard-crm.component'),
  loading: Loader,
});

export const ElementButtonsPage = Loadable({
  loader: () => import('../pages/element-buttons/element-buttons.component'),
  loading: Loader,
});

export const ElementCardsPage = Loadable({
  loader: () => import('../pages/element-cards/element-cards.component'),
  loading: Loader,
});

export const ElementBadgesAndLabelsPage = Loadable({
  loader: () =>
    import(
      '../pages/element-badges-and-labels/element-badges-and-labels.component'
    ),
  loading: Loader,
});

export const ElementNavigationMenusPage = Loadable({
  loader: () =>
    import(
      '../pages/element-navigation-menus/element-navigation-menus.component'
    ),
  loading: Loader,
});

export const ElementTimelinesPage = Loadable({
  loader: () =>
    import('../pages/element-timelines/element-timelines.component'),
  loading: Loader,
});

export const ApplicationsMailboxPage = Loadable({
  loader: () =>
    import('../pages/applications-mailbox/applications-mailbox.component'),
  loading: Loader,
});

export const ApplicationChatPage = Loadable({
  loader: () =>
    import('../pages/applications-chat/applications-chat.component'),
  loading: Loader,
});

export const ApplicationFaqPage = Loadable({
  loader: () => import('../pages/applications-faq/applications-faq.component'),
  loading: Loader,
});

export const ChartBoxesVariation1Page = Loadable({
  loader: () =>
    import(
      '../pages/chart-boxes/chart-boxes-variation-1/chart-boxes-variation-1.component'
    ),
  loading: Loader,
});

export const ChartBoxesVariation2Page = Loadable({
  loader: () =>
    import(
      '../pages/chart-boxes/chart-boxes-variation-2/chart-boxes-variation-2.component'
    ),
  loading: Loader,
});

export const ChartBoxesVariation3Page = Loadable({
  loader: () =>
    import(
      '../pages/chart-boxes/chart-boxes-variation-3/chart-boxes-variation-3.component'
    ),
  loading: Loader,
});

export const ProfileBoxesPage = Loadable({
  loader: () => import('../pages/profile-boxes/profile-boxes.component'),
  loading: Loader,
});

export const SigninPage = Loadable({
  loader: () => import('../pages/signin/signin.component'),
  loading: Loader,
});

export const SigninBoxedPage = Loadable({
  loader: () => import('../pages/signin-boxed/signin-boxed.component'),
  loading: Loader,
});

export const SignupPage = Loadable({
  loader: () => import('../pages/signup/signup.component'),
  loading: Loader,
});

export const SignupBoxedPage = Loadable({
  loader: () => import('../pages/signup-boxed/signun-boxed.component'),
  loading: Loader,
});

export const ForgotPasswordPage = Loadable({
  loader: () => import('../pages/forgot-password/forgot-password.component'),
  loading: Loader,
});

export const ForgotPasswordBoxedPage = Loadable({
  loader: () =>
    import('../pages/forgot-password-boxed/forgot-password-boxed.component'),
  loading: Loader,
});
