import { EMPLOYEE_FETCH_SUCCESS } from '../actions/type';

const INITIAL_SATATE = {};
export default ( state =INITIAL_SATATE, action ) => {
     switch (action.type){
         case EMPLOYEE_FETCH_SUCCESS:
                return action.payload;
         default:
             return state;
     }
};