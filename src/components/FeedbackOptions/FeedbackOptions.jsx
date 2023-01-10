import { BtnFeedback } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const arrOptions = Object.keys(options);
  return arrOptions.map(option => (
    <BtnFeedback
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </BtnFeedback>
  ));
};

FeedbackOptions.prorpTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
