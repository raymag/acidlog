import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {themeType} from '../../global/theme';

export const Container = styled.View`
  min-height: 100%;
  background: ${(props: themeType) => props.theme.colors.grayish};
`;
export const PageTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props: themeType) => props.theme.fonts.title};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props: themeType) => props.theme.colors.primary};
  width: 100%;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const Body = styled.View`
  padding: 10px;
`;

export const Card = styled.View`
  background: ${(props: themeType) => props.theme.colors.dark};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 30px;
`;
export const CardTitle = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${(props: themeType) => props.theme.fonts.title};
  color: ${(props: themeType) => props.theme.colors.primary};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
`;
export const Text = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  color: ${(props: themeType) => props.theme.colors.primary};
`;

export const Input = styled.TextInput`
  border: solid 3px transparent;
  border-bottom-color: ${(props: any) =>
    props.alert
      ? props.theme.colors.accent
      : props.theme.colors.primaryWatered};
  border-radius: 5px;
  color: ${(props: themeType) => props.theme.colors.white}
  background: ${(props: themeType) => props.theme.colors.grayish};
  margin-top: 5px;
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  `;

export const Alert = styled.Text`
  margin-bottom: 15px;
  margin-top: 5px;
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  color: ${(props: themeType) => props.theme.colors.accent};
`;
