import React from 'react'
import { Button } from 'reactstrap';
import TopNav from './TopNav'

class App extends React.Component {
  render() {
    return (
      <div>
      <TopNav/>

        <Button>Hello</Button>
      </div>
    )
  }
}

export default App
