import React from 'react';
import {Text, BaseButton} from './styles';
import {useTheme} from 'styled-components';

type ButtonProps = {
  text: string;
  type:
    | 'primary'
    | 'leanPrimary'
    | 'dark'
    | 'leanDark'
    | 'accent'
    | 'leanAccent';
  onPress?: () => void;
};

type StyleProps = {
  pressed: boolean;
};

const Button = ({text, type, onPress}: ButtonProps) => {
  const theme = useTheme();
  const Colors = {
    primary: {
      text: theme.colors.dark,
      background: theme.colors.primary,
      backgroundWatered: theme.colors.primaryWatered,
      borderColor: 'transparent',
    },
    leanPrimary: {
      text: theme.colors.primary,
      background: 'transparent',
      backgroundWatered: 'transparent',
      borderColor: theme.colors.primary,
    },
    dark: {
      text: theme.colors.primary,
      background: theme.colors.dark,
      backgroundWatered: theme.colors.darkWatered,
      borderColor: 'transparent',
    },
    leanDark: {
      text: theme.colors.dark,
      background: 'transparent',
      backgroundWatered: 'transparent',
      borderColor: theme.colors.dark,
    },
    accent: {
      text: theme.colors.dark,
      background: theme.colors.accent,
      backgroundWatered: theme.colors.accentWatered,
      borderColor: 'transparent',
    },
    leanAccent: {
      text: theme.colors.accent,
      background: 'transparent',
      backgroundWatered: 'transparent',
      borderColor: theme.colors.accent,
    },
  };
  const textColor = Colors[type].text;
  const backgroundColor = Colors[type].background;
  const backgroundWateredColor = Colors[type].backgroundWatered;
  const borderColor = Colors[type].borderColor;
  return (
    <BaseButton
      style={({pressed}: StyleProps) => [
        {
          backgroundColor: pressed ? backgroundWateredColor : backgroundColor,
          translateY: pressed ? 2 : 0,
          borderColor: borderColor,
        },
      ]}
      onPress={onPress ? onPress : () => console.log(text)}>
      <Text color={textColor}>{text}</Text>
    </BaseButton>
  );
};

export default Button;
