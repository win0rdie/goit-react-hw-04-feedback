import { LeaveFeedback } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ options, countTotal, positiveFeedback }) => {
  // const arrOptions = Object.keys(options);
  return (
    <div>
      {Object.keys(options).map(item => (
        <LeaveFeedback key={item}>
          {item}: {options[item]}
        </LeaveFeedback>
      ))}
      <div>
        <LeaveFeedback>Total: {countTotal}</LeaveFeedback>
        <LeaveFeedback>Positive feedback: {positiveFeedback}</LeaveFeedback>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
  countTotal: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};

export default Statistics;
