import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common/Index';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    onRowPress () {
        Actions.employeEdit({employee: this.props.employee.item});
    }
    render(){
        const { name, phone, shift } = this.props.employee.item;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                            <Text style={styles.titleStyle}>  
                                {name}
                            </Text>
                    </CardSection>
            </View>
           </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;