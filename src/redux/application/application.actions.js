import ApplicationTypes from './application.types';

export const setFoldDrawer = (data) => ({
    type: ApplicationTypes.SET_FOLD_DRAWER,
    payload: data
});

export const setFloatingHeaderTools = () => ({
    type: ApplicationTypes.SET_FLOATING_HEADER_TOOLS
});

export const setMegaMenuToggle = (data) => ({
    type: ApplicationTypes.SET_MEGA_MENU_TOGGLE,
    payload: data
});

export const setSettingHeaderToggle = (data) => ({
    type: ApplicationTypes.SET_SETTING_HEADAER_TOGGLE,
    payload: data
});

export const setGridDashboardToggle = (data) => ({
    type: ApplicationTypes.SET_GRID_DASHBOARD_TOGGLE,
    payload: data
});

export const setNotifHeaderToggle = (data) => ({
    type: ApplicationTypes.SET_NOTIF_HEADER_TOGGLE,
    payload: data
});

export const setLangHeaderToggle = (data) => ({
    type: ApplicationTypes.SET_LANG_HEADER_TOGGLE,
    payload: data
});

export const setActiveUserHeaderToggle = (data) => ({
    type: ApplicationTypes.SET_ACTIVE_USER_HEADER_TOGGLE,
    payload: data
});

export const setProfileHeaderToggle = (data) => ({
    type: ApplicationTypes.SET_PROFILE_HEADER_TOGGLE,
    payload: data
});

export const setBreadCrumb = (data) => ({
    type: ApplicationTypes.SET_BREADCRUMB,
    payload: data
});