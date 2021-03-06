import { createSelector } from 'reselect';

const selectApp = state => state.application;

export const selectFoldDrawer = createSelector(
    [selectApp],
    app => app.foldDrawer
);
export const selectFloatingHeaderTools = createSelector(
    [selectApp],
    app => app.floatingHeaderTools
);
export const selectMegaMenuToggle = createSelector(
    [selectApp],
    app => app.megaMenuToggle
);
export const selectSettingHeaderToggle = createSelector(
    [selectApp],
    app => app.settingHeaderToggle
);
export const selectGridDashboardToggle = createSelector(
    [selectApp],
    app => app.gridDashboardToggle
);
export const selectNotifHeaderToggle = createSelector(
    [selectApp],
    app => app.notifHeaderToggle
);
export const selectLangHeaderToggle = createSelector (
    [selectApp],
    app => app.langHeaderToggle
);
export const selectActiveUserHeaderToggle = createSelector(
    [selectApp],
    app => app.activeUserHeaderToggle
);
export const selectProfileHeaderToggle = createSelector(
    [selectApp],
    app => app.profileHeaderToggle
);
export const selectBreadCrumb = createSelector(
    [selectApp],
    app => app.breadCrumb
);