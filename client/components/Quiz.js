import React, { PropTypes, Component } from 'react'

class Quiz extends Component {
  constructor(props, context) {
    super (props, context);
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    console.log("handleSubmit");
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
          />
        <button onClick={this.handleSubmit.bind(this)}>
          Send
        </button>
      </div>
    )
  }
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  submitAnswer: PropTypes.func.isRequired
}

export default Quiz
