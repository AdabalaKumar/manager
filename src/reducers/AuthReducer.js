import { EmailChanged, PasswordChanged, LOGIN_USER_SUCCESS,LOGIN_USER_FAIL, LOGIN_USER } from '../actions/type';


const INITAIL_State = { email: '', password: '', user: null, error: '', loading: false };

export default ( state = INITAIL_State , action ) => {
    switch (action.type){
        case EmailChanged:
                return {...state, email: action.payload };
         case PasswordChanged:
                return {...state, password: action.payload };
         case LOGIN_USER: 
              return {...state, loading: true, error: '' };
          case LOGIN_USER_SUCCESS:
              console.log('LOGIN_USER_SUCCESS2');
              return {...state, user: action.payload, loading: false, error: ''};
          case LOGIN_USER_FAIL:
              return {...state , error: 'Authentication Failed',loading: false};
        default:
        return state;
    }
};