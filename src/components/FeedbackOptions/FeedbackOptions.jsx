import React from 'react';
import { OptionsWrap, OptionsButton } from './FeedBackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsWrap>
    {options.map((option, index) => (
      <OptionsButton
        key={option}
        selected={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </OptionsButton>
    ))}
  </OptionsWrap>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
//  onLeaveFeedback: PropTypes.function.isRequired
