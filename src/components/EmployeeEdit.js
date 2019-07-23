import React, {  Component } from 'react';
import { Card, CardSection, Button, Confirm } from '../components/common/Index';
import EmployeeForm from './EmployeeForm';
import {  connect } from 'react-redux';
import { employeeUpdate,employeeSave,employeeDelete } from '../actions/Index';
import _ from 'lodash';
import communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = { showModel: false };
    componentWillMount(){
        _.each(this.props.employee , ( value, prop) => {
            this.props.employeeUpdate({ prop, value});
        });
    }
    onButtonPress() {
        const { name, phone, shift } =this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid});
    }
    onTextPress() {
        const { phone, shift } =this.props;
        communications.text(phone, `Your Upcoming shift is on ${shift}`);
    }
    onDecline ()
    {
        this.setState({ showModel: false });
    }
    onAccept ()
    {
        const { uid } = this.props.employee;
        this.props.employeeDelete({uid});
        this.setState({showModel:false});
    }
    render() {

        return (
            <Card>  
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)} >Text Schdule</Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({showModel:!this.state.showModel})}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm visible={this.state.showModel}
                  onAccept={this.onAccept.bind(this)}
                  onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
   
    return { name, phone, shift};
};

export default connect(mapStateToProps, { employeeUpdate,employeeSave,employeeDelete }) (EmployeeEdit);
