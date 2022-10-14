import React from 'react';
import { OptionsWrap, OptionsButton } from './FeedBackOptions.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionsWrap>
    {options.map(option => (
      <OptionsButton type="button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </OptionsButton>
    ))}
  </OptionsWrap>
);
// });
// return (
//   <OptionsWrap>
//     {aaa}
//     <OptionsButton type="button" onClick={() => onLeaveFeedback('good')}>
//       Good
//     </OptionsButton>
//     <OptionsButton type="button" onClick={() => onLeaveFeedback('neutral')}>
//       Neutral
//     </OptionsButton>
//     <OptionsButton type="button" onClick={() => onLeaveFeedback('bad')}>
//       Bad
//     </OptionsButton>
//   </OptionsWrap>
// );
// };

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.object.isRequired,
};
