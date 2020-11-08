import React from 'react';
import {
    PieChartTwoTone, ShoppingTwoTone, LikeOutlined, LayoutOutlined, 
    MailTwoTone, MessageTwoTone, LayoutTwoTone, QuestionCircleTwoTone, 
    BorderOutlined, UnorderedListOutlined, BugTwoTone, SafetyOutlined, 
    CreditCardTwoTone, BlockOutlined, FormatPainterOutlined, RocketOutlined,
    HourglassTwoTone, MobileTwoTone, ProfileTwoTone, UngroupOutlined, BookTwoTone,
    StockOutlined, AppstoreOutlined, GiftOutlined, TableOutlined
} from '@ant-design/icons';

const DrawerMenuData = [
    {
        id: 1,
        name: 'Dashboard',
        icon: <RocketOutlined />,
        url: 'dashboard',
        children: [
            {
                id: 11,
                url: 'dashboard/analytics',
                name: 'Analytics',
                icon: <PieChartTwoTone />,
                title: 'Analytics Dashboard',
                description: 'This is an example dashboard created using build-in elements and components.'
            },
            {
                id: 12,
                name: 'Commerce',
                url: 'dashboard/commerce',
                icon: <ShoppingTwoTone />,
                title: 'Commerce Dashboard',
                description: 'This dashboard was created as an example of the flexibility that ArchitectUI offers.'         
            },
            {
                id: 13,
                name: 'Sales',
                url: 'dashboard/sales',
                icon: <StockOutlined />,
                title: 'Sales Dashboard',
                description: 'Example of a Dashboard page built with ArchitectUI.'
            },
            {
                id: 14,
                name: 'Minimal',
                url: 'dashboard/minimal',
                icon: <LikeOutlined />,
                title: 'Minimal Dashboards',
                description: 'This dashboard example was created using only the available elements and components, no additional SCSS was written!'
            }
        ]
    },
    {
        id: 2,
        name: 'Pages',
        icon: <LayoutOutlined />,
        url: 'pages',
        children: [
            {
                id: 21,
                url: 'pages/login',
                name: 'Login',
                icon: null,
                title: null,
                description: null
            },
            {
                id: 22,
                name: 'Login Boxed',
                url: 'pages/login-boxed',
                icon: null,
                title: null,
                description: null 
            },
            {
                id: 23,
                name: 'Register',
                url: 'pages/register',
                icon: null,
                title: null,
                description: null
            },
            {
                id: 24,
                name: 'Register Boxed',
                url: 'pages/register-boxed',
                icon: null,
                title: null,
                description: null
            },
            {
                id: 25,
                name: 'Forgot Password',
                url: 'pages/forgot-password',
                icon: null,
                title: null,
                description: null
            },
            {
                id: 26,
                name: 'Forgot Password Boxed',
                url: 'pages/forgot-password-boxed',
                icon: null,
                title: null,
                description: null
            }
        ]
    },
    {
        id: 3,
        name: 'Application',
        icon: <AppstoreOutlined />,
        url: 'application',
        children: [
            {
                id: 31,
                url: '/applications/mailbox',
                name: 'Mailbox',
                icon: <MailTwoTone />,
                title: 'Mailbox Layout Example',
                description: 'Create stunning UIs for your pages with these layout components.'
            },
            {
                id: 32,
                name: 'Chat',
                url: '/applications/chat',
                icon: <MessageTwoTone />,
                title: 'Chat Example',
                description: 'Build chat layouts or any other kind of layout easily with ArchitectUI'         
            },
            {
                id: 33,
                name: 'Split Layout',
                url: '/application/split-layout',
                icon: <LayoutTwoTone />,
                title: 'Split Layout',
                description: 'Build chat layouts or any other kind of layout easily with ArchitectUI.'
            },
            {
                id: 34,
                name: 'FAQ Section',
                url: '/dashboard/faq-section',
                icon: <QuestionCircleTwoTone />,
                title: 'FAQ Section',
                description: 'Dummy page layout example.'
            }
        ]
    },
    {
        id: 4,
        name: 'Elements',
        icon: <GiftOutlined />,
        url: 'elements',
        children: [
            {
                id: 41,
                url: '/elements/buttons',
                name: 'Buttons',
                icon: <BorderOutlined />,
                title: 'Standard Buttons',
                description: 'Wide selection of buttons that feature different styles for backgrounds, borders and hover options!                '
            },
            {
                id: 42,
                name: 'Badges',
                url: '/elements/badges',
                icon: <UnorderedListOutlined />,
                title: 'Standard Badges',
                description: 'Multiple styles, actions and effects are available for the ArchitectUI dropdown buttons.'         
            },
            {
                id: 43,
                name: 'Cards',
                url: '/elements/cards',
                icon: <BugTwoTone />,
                title: 'Cards',
                description: 'Wide icons selection including from flag icons to FontAwesome and other icons libraries.'
            },
            {
                id: 44,
                name: 'Navigations',
                url: '/elements/navigations',
                icon: <SafetyOutlined />,
                title: 'Navigations Menus',
                description: 'Badges and labels are used to offer extra small pieces of info for your content.'
            },
            {
                id: 45,
                name: 'Timelines',
                url: '/elements/timelines',
                icon: <CreditCardTwoTone />,
                title: 'Timelines',
                description: 'Wide selection of cards with multiple styles, borders, actions and hover effects.'
            }
        ]
    },
    {
        id: 5,
        name: 'Components',
        icon: <BlockOutlined />,
        url: 'components',
        children: [
            {
                id: 51,
                url: 'components/tabs',
                name: 'Tabs',
                icon: <BorderOutlined />,
                title: 'Tabs',
                description: 'Tabs are used to split content between multiple sections. Wide variety available. '
            },
            {
                id: 52,
                name: 'Accordions',
                url: 'components/accordions',
                icon: <FormatPainterOutlined />,
                title: 'Accordions',
                description: 'Accordions represent collapsable component with extended functionality.'         
            },
            {
                id: 53,
                name: 'Notifications',
                url: 'components/notifications',
                icon: <HourglassTwoTone />,
                title: 'Notifications',
                description: 'Notifications represent one of the best ways to give feedback for various users actions. '
            },
            {
                id: 54,
                name: 'Modals',
                url: 'components/modals',
                icon: <MobileTwoTone/>,
                title: 'Modals',
                description: 'Wide selection of modal dialogs styles and animations available.'
            },
        ]
    },
    {
        id: 6,
        name: 'Tables',
        icon: <TableOutlined />,
        url: 'tables',
        children: [
            {
                id: 61,
                url: 'tables/tabs',
                name: 'Data Tables',
                icon: <ProfileTwoTone />,
                title: 'Data Tables',
                description: 'Choose between regular React Bootstrap tables or advanced dynamic ones. '
            },
            {
                id: 62,
                name: 'Regular Tables',
                url: 'tables/accordions',
                icon: <UngroupOutlined />,
                title: 'Regular Tables',
                description: 'Tables are the backbone of almost all web applications.'         
            },
            {
                id: 63,
                name: 'Grid Tabless',
                url: 'tables/notifications',
                icon: <BookTwoTone />,
                title: 'Grid Tables',
                description: 'Basic example of a React table with sort, search and filter functionality.'
            },
        ]
    },
];

export default DrawerMenuData;