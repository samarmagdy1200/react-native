import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from "react-native-router-flux";

import { fetchEmployees } from '../actions/employeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.fetchEmployees();
  }

  onItemPress(employee) {
    Actions.employeeEdit({ employee });
  }

  renderEmployees() {
    return this.props.employees.map(employee => {
      return <ListItem key={employee.id} name={employee.name} onPress={() => this.onItemPress(employee)} />;
    });
  }

  render() {
    return <View>{this.renderEmployees()}</View>;
  }
}

const mapStateToProps = ({ employee }) => {
  return {
    employees: employee.employees
  };
};

export default connect(
  mapStateToProps,
  { fetchEmployees }
)(EmployeeList);
