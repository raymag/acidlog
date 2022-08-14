import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {themeType} from '../../global/theme';

export const Container = styled.View`
  background: ${(props: themeType) => props.theme.colors.grayish};
  height: 100%;
`;
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  color: ${(props: themeType) => props.theme.colors.primary};
  font-weight: bold;
  text-transform: uppercase;
`;
export const Subtitle = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${(props: themeType) => props.theme.colors.primaryWatered};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
export const LogTextArea = styled.TextInput`
  margin-top: 20px;
  background: ${(props: themeType) => props.theme.colors.dark};
  color: ${(props: themeType) => props.theme.colors.white};
  text-align-vertical: top;
  max-height: 70%;
  border-radius: 5px;
`;
export const Wrapper = styled.View`
  padding: 25px 15px;
  height: 92%;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.View``;
export const ContentViewer = styled.Text`
  background: ${(props: themeType) => props.theme.colors.dark};
  color: ${(props: themeType) => props.theme.colors.white};
  font-size: ${RFValue(16)}px;
  padding: 10px;
  border-radius: 5px;
`;
