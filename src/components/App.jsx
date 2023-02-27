import React, { Component } from 'react';

import { Section } from 'components/Section ';
import { Statistics } from 'components/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Notification } from 'components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    this.setState(prevstate => {
      const btnId = evt.target.id;
      return {
        [btnId]: prevstate[btnId] + 1,
      };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, feedbacksCount) => {
      return acc + feedbacksCount;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    const totalFeedbacks = this.countTotalFeedback();
    if (totalFeedbacks >= 1) {
      return Math.round((this.state.good / totalFeedbacks) * 100) + '%';
    }
    return '';
  }

  render() {
    const { good, neutral, bad } = this.state;
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();

    return (
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statictics">
          {this.countTotalFeedback() >= 1 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
