import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Badge } from 'reactstrap';
import paginationFactory from 'react-bootstrap-table2-paginator';
import Api from '../services/Api'

export default class PlayerList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {players: []}
  }

  componentDidMount() {
    let api = new Api()
    api.getPlayers().then(players => {
      this.setState({players})
    })
  }

  render() {
    const columns = [
      {
        dataField: 'Name',
        text: 'Name'
      },
      {
        dataField: 'Position',
        text: 'Position'
      },
      {
        dataField: 'Team_name',
        text: 'Team'
      },
      {
        dataField: 'arrest_count',
        text: 'Arrests',
        sort: true
      },
      {
        dataField: 'df2',
        isDummyField: true,
        text: 'Action',
        formatter: (cellContent, row) => {
          return (
            <Badge href={`/player/${row.key_name}`} color="primary">View Details</Badge>
          );
        }
      }
    ]
    return (
      <div>
          <BootstrapTable keyField='key' data={ this.state.players } columns={ columns } pagination={ paginationFactory() } />

      </div>
    );
  }
}
