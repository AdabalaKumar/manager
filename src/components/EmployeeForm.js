import React, { Component} from 'React';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from '../components/common/Index';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions/Index';

class EmployeForm extends Component {
    
    render() {
        return(
          <View>
               <CardSection>
                  <Input onChangeText={ (text)=> this.props.employeeUpdate({ prop: 'name', value: text }) } value={this.props.name} label="Name" placeholder="kumar" />
               </CardSection>
               <CardSection>
                   <Input onChangeText={text => this.props.employeeUpdate({prop: 'phone', value: text })} value={this.props.phone} label="Phone" placeholder="555-55-5555"/>
               </CardSection>
               <CardSection style={{ flexDirection: 'column' }}>
                   <Text style={styles.pickerTextStyle}>Shift</Text>
                   <Picker style={{ flex:0 }}
                     selectedValue={this.props.shift}
                     onValueChange={day => this.props.employeeUpdate({prop: 'shift', value: day })}
                   >
                       <Picker.Item label="Monday" value="Monday" />
                       <Picker.Item label="Tuesday" value="Tuesday" />
                       <Picker.Item label="Wednesday" value="Wednesday" />
                       <Picker.Item label="Thursday" value="Thursday" />
                       <Picker.Item label="Friday" value="Friday" />
                       <Picker.Item label="Satuday" value="Satuday" />
                       <Picker.Item label="Sunday" value="Sunday" />
                   </Picker>
               </CardSection>
          </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
}
const mapStateToProps = (state) => {
   const { name, phone, shift } = state.employeeForm;
   
   return { name, phone, shift};
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeForm);