import React, { Component } from 'react';

import {SearchBar, VideoDetail, VideoList} from '../components/Index.js';
import Request from '../helpers/Request.js';

class MainContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      currentVideo: null
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=llama&key=AIzaSyDJ0rX4LcGGQK3etBW6RkVsZlHU9NXYOyo')
    .then((data) => {
      this.setState({videos: data.items, currentVideo: data.items[0]})
    })

  }

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
