import React from 'react';

import './App.css';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: "",
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    fetch('http://13.127.29.189:3000/pp')
      .then(response => response.json())
    .then(data => this.setState({ data }));
    
    
  }

  render() {
    const { data } = this.state
    return (
      <>
         <h1>Welcome to Fun Lottery</h1>
         <h2>See If you are Lucky</h2>

        <button onClick={this.handleClick}>CLICK ON ME!!</button>
        <p>{data}</p>
      </>
    );
  }

}



export default App;
