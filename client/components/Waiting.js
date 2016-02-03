import React, { PropTypes, Component } from 'react'

class Waiting extends Component {
  constructor(props, context) {
    super (props, context);
    this.state = {
      text: '',
      answerSubmitted: false
    }
  }

  render() {
    return (
      <div>
        <h1>Waiting...</h1>
      </div>
    )
  }
}

export default Waiting
