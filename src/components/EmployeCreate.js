import React, { Component } from 'react';
import { connect,  } from 'react-redux';
import { employeeUpdate,employeeCreate } from '../actions/Index';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common/Index';
import EmployeForm from './EmployeeForm';

class EmployeCreate extends Component {
    
    onButtonPress()
    {
       const { name, phone, shift } =this.props;
       this.props.employeeCreate({name, phone, shift: shift || 'Monday' });
    }
    render() {
        return (
           <Card>   
               <EmployeForm {...this.props} />
               <CardSection>
                  
               </CardSection>
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)} > Create</Button>
               </CardSection>
           </Card>
        );
    }
} 

const mapStateToProps = (state) => {
   const { name, phone, shift } = state.employeeForm;
   
   return { name, phone, shift};
};
export default connect(mapStateToProps, { employeeUpdate,employeeCreate })(EmployeCreate);