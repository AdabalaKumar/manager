import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/Index';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch();

      // this.createDataSource(this.props);
    }
    componentWillReceiveProps(nextProps) {
        
       // this.createDataSource(nextProps);
    }
    createDataSource({employees}) {

        const ds = new Flatlist.DataSource({ 
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(employees);
    }
    renderListItem(employee)
    {
        return <ListItem employee={employee} />
    }
    render () {
       
        return (
            <FlatList 
            data={this.props.employees} 
            renderItem={this.renderListItem}
            keyExtractor={item => item.uid}
            />
        );
    }
}
const mapStateToPorps = state => {
   
  const employees = _.map(state.employees, (val, uid) => {
      return {...val, uid };
  });  
  
  return { employees };
};
export default  connect(mapStateToPorps, { employeesFetch })(EmployeeList);