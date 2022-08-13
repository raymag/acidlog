import React from 'react';
import {Content, Text} from './styles';
type buttonTypes = {
  text: string;
};
const Button = ({text}: buttonTypes) => {
  return (
    <Content>
      <Text>{text}</Text>
    </Content>
  );
};

export default Button;
