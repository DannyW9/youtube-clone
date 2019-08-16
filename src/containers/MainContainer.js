import React, { Component } from 'react';

class MainContainer extends Component {
  render(){
    return(
      <div>
        <div id='nav'>
          <h1> NAVBAR </h1>
        </div>
        <div id='main'>
          <div id='video'>
            <h1> VIDEO </h1>
          </div>
          <div id='list'>
            <h1> VIDEO LIST </h1>
          </div>
        </div>

      </div>
    );
  }
}



export default MainContainer;
