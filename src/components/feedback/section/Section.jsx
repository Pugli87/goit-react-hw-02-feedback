import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionCont = styled.div``;

const FeedbackTitle = styled.h2`
  font-weight: 500;
  &::first-letter {
    text-transform: uppercase;
  }
`;
/*
const Section = ({ title, children }) => {
  return (
    <SectionCont>
      <FeedbackTitle>{title}</FeedbackTitle>
      {children}
    </SectionCont>
  );
};

export default Section;
*/

export default class section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <SectionCont>
        <FeedbackTitle>{title}</FeedbackTitle>
        {children}
      </SectionCont>
    );
  }
}
/*
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
*/
