import React from 'react';
import PropTypes from 'prop-types';
import { OptionsWrap, OptionsButton } from './FeedBackOptions.styled';

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
