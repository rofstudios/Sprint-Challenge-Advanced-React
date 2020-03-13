import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import UserByAZ from './components/UserByAZ';
import UserByRank from './components/UserByRank';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      byRank: [],
      byAZ: []
    };
  }    

  // componentDidMount() {
  //   axios.get('http://localhost:5000/api/players')
  //   .then(res => {
  //     // console.log(res)
  //     // console.log(res.data[0])
  //     // console.log(res.data[1])
  //     // console.log(res.data[100])
  //     this.setState({
  //       players: res.data
  //     })
  //     // let byRank = this.state.players.sort((a,b) => (a.searches > b.searches) ? 1: ((b.searches > a.searches) ? -1 : 0));
  //     // console.log('by rank', byRank)

  //     // let byAZ = this.state.players.sort((a,b) => (a.name > b. name) ? 1: ((b.name > a.name) ? -1 : 0));
  //     // console.log('by A-Z', byAZ)
  //     // return byRank, byAZ;
  //   })
  //   .catch(err => console.log(err.message));
  // }



  render() {
    // console.log('this.state in render', this.state.players)
    // let byRank = this.state.players.sort((a,b) => (a.searches > b.searches) ? 1: ((b.searches > a.searches) ? -1 : 0));
    // console.log('by rank', byRank)

    // let byAZ = this.state.players.sort((a,b) => (a.name > b. name) ? 1: ((b.name > a.name) ? -1 : 0));
    // console.log('by A-Z', byAZ)

    // console.log('inside render,', byAZ)
    return (
      <div className="App">
        <h1>Womens' World Cup</h1>
        <UserByAZ/>
        <UserByRank/>
      </div>
    );
  }
}

export default App;
