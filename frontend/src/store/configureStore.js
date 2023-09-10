import { configureStore} from '@reduxjs/toolkit';
import taskReducer from './tasks';
import employeeReducer from './employees';
import log from './middleware/log';
import logger from 'redux-logger';
import error from './middleware/error';


const store = configureStore( {
    reducer : {
        tasks7: taskReducer,
        employees7: employeeReducer
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger, error]
} );

export default store;