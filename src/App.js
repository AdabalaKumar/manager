import React, { Component } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import  { createStore, applyMiddleware } from 'redux';
import  ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers/Index';
import { Header } from './components/common/Index';
import LoginForm from './components/LoginForm';
import Router from './Router';
class App extends Component {
    componentWillMount() {
        var firebaseConfig = {
            apiKey: 'AIzaSyCZ9J4_mF9jU-hVAd_ZHSx1oF7Ftu-B1wE',
            authDomain: 'manager-82eb1.firebaseapp.com',
            databaseURL: 'https://manager-82eb1.firebaseio.com',
            projectId: 'manager-82eb1',
            storageBucket: '',
            messagingSenderId: '663536169259',
            appId: '1:663536169259:web:4176740dd6c4aa14'
          };
          if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
          }
    }
    render() {
        return (
            <Provider store={createStore(reducers, {} , applyMiddleware(ReduxThunk))}>  
             <Router />
            </Provider>
        );
    }
}
export default App;