import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total <= 0 ? (
        <p>There is no feedback</p>
      ) : (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
    </>
  );
};
export default Statistics;*/

export default class Statisics extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        {total <= 0 ? (
          <p>There is no feedback</p>
        ) : (
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
          </ul>
        )}
      </>
    );
  }
}
/*
  Statisics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  };
*/
