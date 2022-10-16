import React from 'react';
import PropTypes from 'prop-types';
import {
  StatisticsWrap,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
  StatisticsValue,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsWrap>
    <StatisticsList>
      <StatisticsItem>
        <StatisticsText>Good:</StatisticsText>
        <StatisticsValue>{good}</StatisticsValue>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Neutral:</StatisticsText> <span>{neutral}</span>
      </StatisticsItem>
      <StatisticsItem>
        <StatisticsText>Bad: </StatisticsText>
        <StatisticsValue>{bad}</StatisticsValue>
      </StatisticsItem>
      {total !== 0 && (
        <StatisticsItem>
          <StatisticsText>Total:</StatisticsText>
          <StatisticsValue>{total}</StatisticsValue>
        </StatisticsItem>
      )}
      {positivePercentage !== 0 && (
        <StatisticsItem>
          <StatisticsText>Positive Rate:</StatisticsText>
          <StatisticsValue>{positivePercentage}</StatisticsValue>
        </StatisticsItem>
      )}
    </StatisticsList>
  </StatisticsWrap>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
