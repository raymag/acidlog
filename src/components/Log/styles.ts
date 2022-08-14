import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {themeType} from '../../global/theme';
import Button from '../Button';

type ContainerProps = themeType & {
  light: boolean;
};

export const Container = styled.View`
  margin-top: 25px;
  padding: 15px;
  border-top-width: 5px;
  border-top-style: solid;
  border-top-color: ${(props: themeType) => props.theme.colors.dark};
  background: ${(props: ContainerProps) =>
    props.light ? props.theme.colors.primary : props.theme.colors.dark};
`;
export const Body = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 0;
`;
export const LeftSide = styled.View`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightSide = styled.View`
  width: 70%;
  margin-left: 10px;
`;
export const Title = styled.Text`
  background: ${(props: themeType) => props.theme.colors.dark};
  border-radius: 3px;
  padding: 5px;
  color: ${(props: themeType) => props.theme.colors.primary};
  font-weight: bold;
  font-size: ${RFValue(16)}px;
  font-family: ${(props: themeType) => props.theme.fonts.title};
`;
export const Content = styled.Text`
  background: ${(props: themeType) => props.theme.colors.dark};
  border-radius: 3px;
  padding: 20px;
  color: ${(props: themeType) => props.theme.colors.primaryWatered};
  font-weight: regular;
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content}
  margin-top: 15px;
  max-height: 400px;
  border: solid 2px transparent;
  border-top-color: ${(props: ContainerProps) =>
    props.light ? 'transparent' : props.theme.colors.primary};
  padding-left: 10px;
`;
export const Footer = styled.View`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;
export const SmallButton = styled(Button)`
  padding: 2px 5px;
  font-weight: regular;
  font-size: ${RFValue(10)}px;
  margin-left: 15px;
  text-transform: uppercase;
`;
export const Highlight = styled.View`
  width: 100px;
  height: 100px;
  border: solid 3px ${(props: themeType) => props.theme.colors.primaryWatered};
  border-radius: 3px;
  background: ${(props: themeType) => props.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HighlightText = styled.Text`
  font-size: ${RFValue(40)}px;
  font-weight: bold;
  font-family: ${(props: themeType) => props.theme.fonts.title};
  color: ${(props: themeType) => props.theme.colors.primary};
`;
