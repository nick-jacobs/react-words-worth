import React, { Component } from 'react'

class HowTo extends Component {

  render() {
    return (
        <div id='howto-container'>
          <div id='howto'>
            <div>
              <p>Click 'New Game' to start new game and get a random target word.</p>
              <p>Your job is to think of words that relate to the target.</p>
              <p>You gain more points for words that are more related.</p>
              <p>A word can't be used more than once</p>
              <p>Get to 100 points before the other players and you WIN!</p>
              </div>
          </div>
        </div>
      )
  }
}

export default HowTo