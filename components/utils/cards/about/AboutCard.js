import React from 'react';
import { AboutCardContainer } from '../../../../styles/about.styles';
import { Text2XL, TextSm } from '../../typography/Typography';

function AboutCard({ Svg, index, title, text }) {
  return (
    <AboutCardContainer row={index % 2 === 0}>
      <div className="svg-container">
        <Svg />
      </div>
      <div className="info-container">
        <Text2XL>{title}</Text2XL>
        <TextSm>{text}</TextSm>
      </div>
    </AboutCardContainer>
  );
}

export default AboutCard;
