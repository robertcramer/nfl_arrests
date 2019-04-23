import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Spinner } from 'reactstrap';
import Api from '../services/Api'

export default class PlayerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {arrests: []}
  }

  componentDidMount() {
    console.log('component mounted')
    let api = new Api()
    api.getPlayerDetails(this.props.match.params.playerName).then(arrests => {
      this.setState({arrests})
    })
  }

  render() {
    if (this.state.arrests.length == 0) {
      return (
        <div className="text-center">
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>
      )
    }
    return (
      <div>
        <h2>Player Details: {this.props.match.params.playerName.replace('_', ' ')} - ({this.state.arrests.length} total arrests)</h2>
        {this.state.arrests.map(function(item) {
          return (
            <div key={item.arrest_stats_id}>
              <Card>
                <CardHeader>{item.Date} - {item.Team_preffered_name}</CardHeader>
                <CardBody>
                  <CardTitle>{item.Crime_category}</CardTitle>
                  <CardText>{item.Description}</CardText>
                </CardBody>
                <CardFooter>{item.Outcome}</CardFooter>
              </Card>
              <br />
            </div>

          )
        })}
      </div>
    );
  }
}
