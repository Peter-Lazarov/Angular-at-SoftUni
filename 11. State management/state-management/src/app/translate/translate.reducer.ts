import { Action } from "@ngrx/store";

export function translateReducer(state = 'Hello', action: Action) {
    console.log({action, state});

    switch (action.type) {
        case 'BG':
            return (state = 'Здрасти!')
        case 'EN':
            return (state = 'Hello!');
        case 'IT':
            return (state = 'Ciao');
        default:
            return state;
    }
}
