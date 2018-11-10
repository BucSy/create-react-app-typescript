export const TEXT_FROM_INPUTBOX: string = 'TEXT_FROM_INPUTBOX';
export const TEXT_TO_STORE: string = 'TEXT_TO_STORE';
export const CHANGE_LANGUAGE: string = 'CHANGE_LANGUAGE';
import produce from 'immer';
import { action } from 'typesafe-actions';
import locale from '../../../helpers/defaultLanguage';

export interface IApp {
    textFromInputBox: string;
    language: string | undefined;
}

const initalizeState: IApp = {
    textFromInputBox: 'basictext',
    language: locale,
};

export const actions = {
    textInputBox: (id: string) => action(TEXT_TO_STORE, id ),
    changeLanguage: (lang: string) => action(CHANGE_LANGUAGE, lang),
}

export default (state = initalizeState, action: {type: string, payload: string}) => 
    produce(state, draft => {
        switch(action.type) {
            case TEXT_FROM_INPUTBOX:
                draft.textFromInputBox = action.payload;
                return draft;
            case CHANGE_LANGUAGE:
                draft.language = action.payload;
                return draft;
            default:
                return state;
        }
});