import { EMPLOYEE_UPDATE, UPDATE_PROGRASS , EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_CREATED,EMPLOYEE_FETCH_SUCCESS } from './type';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value} ) => {
   return {
       type: EMPLOYEE_UPDATE,
       payload: { prop, value }
   };
};
export const employeeCreate = ( {name, phone, shift}) => {
    return (dispatch) => {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({name, phone, shift })
    .then(()=> {
        dispatch({type: EMPLOYEE_CREATED})
        Actions.pop(); });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    
   return (dispatch) => {
    
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
        dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val() })
    });
      
   };
};

export const employeeSave = ({ name, phone, shift, uid}) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift})
        .then(() =>   Actions.pop());
    };
};

export const employeeDelete = ({ uid }) => {
    const { currentUser } = firebase.auth();
    console.log('action');
    console.log(uid);
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
         .remove()
         .then(() => Actions.pop()); 
    };
};
