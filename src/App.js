import React, { Component } from 'react';
import Container from './components/container';
import Section from './components/section';
import FeedbackOptions from './components/feedbackOptions';
import Statistics from './components/statistics';
import Notification from './components/notification';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  setFeedback = key => {
    this.setState(state => ({
      [key]: state[key] + 1,
    }));
  };

  countTotalFeedback = state =>
    Object.values(state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = total =>
    `${Math.round((this.state.good / total) * 100)}%`;

  render() {
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    return (
      <>
        <Container>
          <Section title="Please Leave feedback">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.setFeedback}
            />
          </Section>
          <Section title="Statistics">
            {total ? (
              <Statistics
                data={this.state}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </Container>
      </>
    );
  }
}

export default App;
