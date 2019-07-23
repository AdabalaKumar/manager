import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeCreate from './components/EmployeCreate';
import EmployeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
      <Router>
          <Scene key="root" hideNavBar>
            <Scene key="auth"  >
                 <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key="main">
                <Scene 
                 rightTitle="Add" 
                 onRight={() => Actions.employeCreate() }
                 key="employeeList" component={ EmployeeList } title="Employies" initial />
                <Scene key="employeCreate" component={EmployeCreate} title="Employe Create"  />
                <Scene key="employeEdit" component={EmployeEdit} title="" />
            </Scene> 
          </Scene>
      </Router>
    );
};

export default RouterComponent;
