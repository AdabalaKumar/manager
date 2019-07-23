import React, { Component } from 'react';
import {View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common/Index';
import { connect } from 'react-redux';
import {emailChanged, passwordChanged, loginUser } from '../actions/Index';


class LoginForm extends Component {
    onEmailChange (text) {
        
        this.props.emailChanged(text);
       // console.log(this.props.email);
    }
    onPasswordChange (text) {
        this.props.passwordChanged(text);
       // console.log(this.props.email);
    }
    onButtonPress ()
    {
        const { email, password } =this.props;
      //  console.log(email);
       this.props.loginUser( { email, password } );
       console.log(this.props.user);
      
    }
    renderError() {
        if(this.props.error){
            return(
                <View >
                <Text style={styles.errorTextStyle}> 
                   {this.props.error}
                </Text>
                </View>
            );
        }
    }
    renderSubmitButton () {
        console.log('loading: '+this.props.loading);
        if(this.props.loading)
        {
            return <Spinner size="large" />
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        );
    }
    render() {
        return (
            <Card>
               <CardSection>
                   <Input label="Email" placeholder="user@gmail.com" 
                    onChangeText={this.onEmailChange.bind(this)} 
                    value={this.props.email} />
               </CardSection>
               <CardSection>
                   <Input label="Password" placeholder="Password" secureTextEntry 
                   onChangeText={this.onPasswordChange.bind(this)}
                    />
               </CardSection>
               {this.renderError()}
               <CardSection>
                  {this.renderSubmitButton()}
               </CardSection>
            </Card>
        );
    }
}
const mapSatteToProp =  state => {
    const { email, password, error, loading, user } = state.auth;
   
return {
    email,
    password,
    error,
    loading,
    user
};
};
const styles={
    errorTextStyle: {
        fontSize:20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default connect(mapSatteToProp, { 
    emailChanged, passwordChanged, loginUser
})(LoginForm);