import React from 'react';
import Api from '../services/Api'

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {players: []}
  }

  componentDidMount() {
    let api = new Api()
    let players = api.getPlayers()
    this.setState({players})
  }

  render() {
    return (
      <div>
        <p>Player List</p>
      </div>
    );
  }
}
