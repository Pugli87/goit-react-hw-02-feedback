/*import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  handleFeedback = (type) => {
    this.setState(
      (prevState) => ({
        [type]: prevState[type] + 1,
      }),
      () => this.Total()
    );
  };

  Total = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + neutral + bad;
    const positivePercentage = totalFeedbacks === 0 ? 0 : Math.round((good / totalFeedbacks) * 100);

    this.setState({
      total: totalFeedbacks,
      positive: positivePercentage,
    });
  };

  render() {
    const { step } = this.props;

    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={() => this.handleFeedback("good")}>
            Good {step}
          </button>
          <button type="button" onClick={() => this.handleFeedback("neutral")}>
            Neutral {step}
          </button>
          <button type="button" onClick={() => this.handleFeedback("bad")}>
            Bad {step}
          </button>
        </div>

        <div>
          <h2>Statistics</h2>
          {this.state.total <= 0 ? (
            <p>There is no feedback</p>
          ) : (
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>
              <li>Total: {this.state.total}</li>
              <li>Positive feedback: {this.state.positive}%</li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default Counter;*/

import React, { Component } from 'react';
import Section from './section/Section';
import Statistics from './statisitics/Statisics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
/*
const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

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

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};*/

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    return totalFeedbacks === 0 ? 0 : Math.round((good / totalFeedbacks) * 100);
  };

  render() {
    const feedbackOptions = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
