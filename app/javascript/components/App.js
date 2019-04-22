import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import TopNav from './TopNav'
import PlayerList from './PlayerList'
import PlayerDetails from './PlayerDetails'
import NoMatch from './NoMatch'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav/>
          <Container>
            <Switch>
              <Route path="/" exact component={PlayerList} />
              <Route path="/player/:playerName" component={PlayerDetails} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
