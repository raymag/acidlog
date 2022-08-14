import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {themeType} from '../../global/theme';

export const Veil = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(props: themeType) => props.theme.colors.grayish};
`;
export const Container = styled.View`
  padding: 10px;
  width: 90%;
  background: ${(props: themeType) => props.theme.colors.dark};
  border-radius: 5px;
`;
export const Title = styled.Text`
  padding: 2px 15px;
  margin: 25px 0;
  border-radius: 5px;
  font-size: ${RFValue(22)}px;
  font-family: ${(props: themeType) => props.theme.fonts.title};
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: ${(props: themeType) => props.theme.colors.primary};
  width: 90%;
`;
export const Label = styled.Text`
  margin-top: 15px;
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  color: ${(props: themeType) => props.theme.colors.primaryWatered};
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
export const Text = styled.Text`
  margin-bottom: 25px;
  font-size: ${RFValue(16)}px;
  text-align: center;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  color: ${(props: themeType) => props.theme.colors.primaryWatered};
  border: 3px solid transparent;
  border-top-color: ${(props: themeType) => props.theme.colors.primaryWatered};
  padding-top: 15px;
`;
export const Alert = styled.Text`
  margin-top: 5px;
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  color: ${(props: themeType) => props.theme.colors.accent};
`;
