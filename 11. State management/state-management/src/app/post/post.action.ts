import { Action } from "@ngrx/store";

//Action Types
export const EDIT = '[Post] Edit';
export const RESET = '[Post] Reset';
export const UPVOTE = '[Post] Upvote';
export const DOWNVOTE = '[Post] Downvote';

//Actions
export class Edit implements Action{
    readonly type = EDIT;

    constructor(public payload: string) {
        
    }
}

export class Reset implements Action {
    readonly type = RESET;
}

export class Upvote implements Action {
    readonly type = UPVOTE;
}

export class Downvote implements Action {
    readonly type = DOWNVOTE;
}

export type All = Edit | Reset | Upvote | Downvote;
