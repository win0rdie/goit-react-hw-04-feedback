import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import { Container } from './App.styled';
class App extends Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleClickBtn = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const countTotal = this.countTotalFeedback();
    let result = 0;
    if (countTotal > 0) {
      result = Math.round((good / countTotal) * 100);
    }
    return `${result}%`;
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const countTotal = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            {/* <h1>Please leave feedback</h1> */}
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClickBtn}
            />
          </Section>
          {countTotal > 0 ? (
            <Section title="Statistics">
              <Statistics
                options={this.state}
                countTotal={countTotal}
                positiveFeedback={positiveFeedback}
              />
            </Section>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Container>
      </>
    );
  }
}

// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101',
//   }}
// >
//   goit-react-hw-02-feedback
// </div>
export default App;
