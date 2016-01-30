import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Quiz from '../components/Quiz'
import * as GameActions from '../actions/game'

class App extends Component {
  render() {
    console.log("App props", this.props);
    const { question, actions } = this.props;
    return (
      <div>
        <Quiz
          question={question}
          submitAnswer={actions.submitAnswer}
        />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired,
  question: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  console.log("mapStateToProps - state:", state);
  return {
    question: state.game.question
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

