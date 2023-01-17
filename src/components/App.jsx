// import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import Section from './Section';
import { Container } from './App.styled';
// import SignupForm from './SignupForm/SignupForm';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [countTotalFeedback, setCountTotalFeedback] = useState(0);
  const [countPositiveFeedbackPercentage, setCountPositiveFeedbackPercentage] =
    useState(0);

  const feedbackOptions = { good, neutral, bad };

  const handleClickBtn = option => {
    switch (option) {
      case 'good':
        setGood(prevGood => {
          return prevGood + 1;
        });
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    setCountTotalFeedback(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    setCountPositiveFeedbackPercentage(
      Math.round((good / countTotalFeedback) * 100) + '%'
    );
  }, [countTotalFeedback, good]);

  return (
    <>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedbackOptions)}
            onLeaveFeedback={handleClickBtn}
          />
        </Section>
        {countTotalFeedback > 0 ? (
          <Section title="Statistics">
            <Statistics
              options={feedbackOptions}
              countTotal={countTotalFeedback}
              positiveFeedback={countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Container>
    </>
  );
}

// class App extends Component {
//   static defaultProps = {
//     initialGood: 0,
//     initialNeutral: 0,
//     initialBad: 0,
//   };

//   state = {
//     good: this.props.initialGood,
//     neutral: this.props.initialNeutral,
//     bad: this.props.initialBad,
//   };

//   handleClickBtn = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const countTotal = this.countTotalFeedback();
//     let result = 0;
//     if (countTotal > 0) {
//       result = Math.round((good / countTotal) * 100);
//     }
//     return `${result}%`;
//   };

//   render() {
//     // const { good, neutral, bad } = this.state;
//     const countTotal = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Container>
//           <Section title="Please leave feedback">
//             <FeedbackOptions
//               options={this.state}
//               onLeaveFeedback={this.handleClickBtn}
//             />
//           </Section>
//           {countTotal > 0 ? (
//             <Section title="Statistics">
//               <Statistics
//                 options={this.state}
//                 countTotal={countTotal}
//                 positiveFeedback={positiveFeedback}
//               />
//             </Section>
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//           {/* <SignupForm /> */}
//         </Container>
//       </>
//     );
//   }
// }

// export default App;
