import React from 'react';

export default class PlayerDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('component mounted')
  }

  render() {
    return (
      <div>
        <p>Player Details {this.props.match.params.playerName}</p>
      </div>
    );
  }
}
