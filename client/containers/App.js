import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Quiz from '../components/Quiz';
import Waiting from '../components/Waiting';
import { submitAnswer, postAnswerToServer } from '../actions/game';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
  }

  handleSubmitAnswer(answer) {
    this.props.dispatch(postAnswerToServer(answer));
  }

  renderQuiz() {
    const { question } = this.props;
    //const { question, actions } = this.props;
    return (
        <Quiz
          question={question}
          submitAnswer={this.handleSubmitAnswer}
        />
    );
  }

  renderWaiting() {
    return (
        <Waiting />
    );
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.waitingForAnswer) {
      this.props.dispatch(postAnswerToServer(this.props.answer));
    }
  }

  render() {
    console.log("render() - props:", this.props);
    return (
      <div>
        {!this.props.waitingForAnswer ? this.renderQuiz() : this.renderWaiting()}
      </div>
    )
  }
}

App.propTypes = {
  //actions: PropTypes.object.isRequired,
  question: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
  //waitingForAnswer: PropTypes.boolean.isRequired
  //nowPlaying: PropTypes.boolean.isRequired
}

function mapStateToProps(state) {
  console.log("mapStateToProps - state:", state);
  return {
    question: state.game.question,
    waitingForAnswer: state.game.waitingForAnswer
  }
}

//function mapDispatchToProps(dispatch) {
  //return {
    //actions: bindActionCreators(GameActions, dispatch)
  //}
//}

export default connect(
  mapStateToProps
  //mapDispatchToProps
)(App)

