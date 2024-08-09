import { Activity } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } }

type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    if (action.type === 'save-activity') {
        // Add the new activity to the list of activities

        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    if (action.type === 'set-activeId') {
        // Set the activeId to the id of the activity that was clicked

        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state;
}