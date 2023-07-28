import React, { Component } from 'react';
import styled from 'styled-components';
import Section from './section/Section';
import Statistics from './statisitics/Statisics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';

const FeedbackCont = styled.div`
  margin: 50px;
`;
class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState({
      [type]: this.state[type] + 1,
    });
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
      <FeedbackCont>
        <Section title="please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section title="statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        </Section>
      </FeedbackCont>
    );
  }
}

export default Feedback;
