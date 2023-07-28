import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FeddbackCont = styled.div``;
const FeddbackButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  &::first-letter {
    text-transform: uppercase;
  }
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

/*
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeddbackCont>
      {options.map(option => (
        <FeddbackButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </FeddbackButton>
      ))}
    </FeddbackCont>
  );
};

export default FeedbackOptions;
*/

export default class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <FeddbackCont>
        {options.map(option => (
          <FeddbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </FeddbackButton>
        ))}
      </FeddbackCont>
    );
  }
}

/*
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
*/
