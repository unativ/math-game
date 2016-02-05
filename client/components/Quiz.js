import React, { PropTypes, Component } from 'react'

class Quiz extends Component {
  constructor(props, context) {
    super (props, context);
    this.state = {
      text: '',
      answerSubmitted: false
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    // send the answer to the server and trigger an action with the result (correct/incorrect)
    console.log("handleSubmit", this.props);
    this.setState({answerSubmitted: true});
    this.props.submitAnswer(this.state.text);
  }

  render() {
    return (
      <div>
        <header className="header">
            <h1>{this.props.question}</h1>
        </header>
        <input
          type="number"
          placeholder="?"
          value={this.state.text}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)}
          />
        <button
          //disabled={this.state.answerSubmitted}
          onClick={this.handleSubmit.bind(this)} >
          Send
        </button>
      </div>
    )
  }
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired
}

export default Quiz
