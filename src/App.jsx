import React from 'react'
import EmployeeList from './EmployeeList'
import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Container>
      <section name="header">
        <h1>Employee list</h1>
      </section>
      <section name="main">
        <EmployeeList />
      </section>
    </Container>
  )
}

export default App
