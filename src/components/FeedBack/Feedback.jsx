import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statictics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const FeedBack = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        console.log(`Sorry, we are out of `);
    }
  };

  const countTotalFeedback = () => {
    let totalFeedback = 0;
    totalFeedback = bad + good + neutral;
    console.log(totalFeedback);
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      let PositiveFeedbackPercentage = good / countTotalFeedback();
      return `${PositiveFeedbackPercentage.toFixed(2) * 100} %`;
    }
  };

  // const { good, neutral, bad } = this.state;
  return (
    <>
      <Section title={'Please live your feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};
