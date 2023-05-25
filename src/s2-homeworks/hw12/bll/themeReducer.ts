type initStateType={
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state:initStateType = initState, action: changeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state,themeId:action.id}
        default:
            return state
    }
}

type changeThemeIdType={
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
