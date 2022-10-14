import { Section } from 'components/Section/Section';
import React from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statictics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class FeedBack extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let totalFeedback = 0;
    totalFeedback = bad + good + neutral;
    return totalFeedback;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      let PositiveFeedbackPercentage = good / this.countTotalFeedback();
      return `${PositiveFeedbackPercentage.toFixed(2) * 100} %`;
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please live your feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </>
    );
  }
}
