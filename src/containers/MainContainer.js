import React, { Component } from 'react';

import {SearchBar, VideoDetail, VideoList} from '../components/Index.js';

class MainContainer extends Component {
  render(){
    return(
      <div>

        <div id='nav'>
          <SearchBar/>
        </div>

        <div id='main'>
          <div id='video'>
            <VideoDetail/>
          </div>
          <div id='list'>
            <VideoList/>
            <h2> Video 1</h2>
            <h2> Video 2</h2>
            <h2> Video 3</h2>
            <h2> Video 4</h2>
            <h2> Video 5</h2>
          </div>
        </div>

      </div>
    );
  }
}



export default MainContainer;
