import { combineReducers, Reducer } from 'redux';
import appReducer from './modules/app';
import { IStore } from './IStore';

const rootReducer: Reducer<IStore> = combineReducers<IStore>({
    app: appReducer,
});

export default rootReducer;