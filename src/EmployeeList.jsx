import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react'

import axios from 'axios'

class EmployeeList extends Component {

  state = {
    employees: []
  }

  componentDidMount() {
    this.fetchEmployeeData()
  }

  async fetchEmployeeData() {
    let employeeData = await axios.get('https://reqres.in/api/users?per_page=4')
    this.setState({ employees: employeeData.data.data })
  }
  render() {
    let employeeList

    employeeList = this.state.employees.map(employee => {
      return (
        <List.Item key={employee.id}>
          <Image avatar src={employee.avatar} />
          <List.Content>
            <List.Header as='p'>{`${employee.first_name} ${employee.last_name}`}</List.Header>
            <List.Description>{employee.email}</List.Description>
          </List.Content>

        </List.Item>
      )
    })

    return (
      <>
        <List>
          {employeeList}
        </List>
      </>
    );
  }
}

export default EmployeeList;