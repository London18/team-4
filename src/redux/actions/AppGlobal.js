import AllActions from "./AllActions";

export function setSelectedContentId(contentId) {
    return {
        type: AllActions.AppGlobal.SET_SELECTED_CONTENT_ID,
        contentId: contentId
    }
}

export function toggleDrawer() {
    return {
        type: AllActions.AppGlobal.TOGGLE_DRAWER
    }
}

export function changePrimaryColor(color) {
    return {
        type: AllActions.AppGlobal.CHANGE_PRIMARY_COLOR,
        color: color
    }
}
