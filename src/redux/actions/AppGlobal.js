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

export function changePaletteColor(palette, color){
    var returnObject = {};
    returnObject['type'] = AllActions.AppGlobal.CHANGE_PALETTE_COLOR;
    returnObject['palette'] = palette;
    returnObject['color'] = color;
    return returnObject;
} 


