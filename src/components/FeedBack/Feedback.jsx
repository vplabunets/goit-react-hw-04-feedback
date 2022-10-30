import React, { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statictics/Statistics';
import { Notification } from 'components/Notification/Notification';

export const FeedBack = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [PositiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);

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

  useEffect(() => {
    setTotalFeedback(bad + good + neutral);
    setPositiveFeedbackPercentage(
      `${(good / totalFeedback).toFixed(2) * 100} %`
    );
  }, [bad, good, neutral, totalFeedback]);

  return (
    <>
      <Section title={'Please live your feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {totalFeedback > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={PositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};
