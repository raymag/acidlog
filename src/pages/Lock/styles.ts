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
  width: 80%;
`;
export const TitleWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: break-word;
  margin-bottom: 25px;
`;
export const Title = styled.Text`
  background: ${(props: themeType) => props.theme.colors.dark};
  padding: 5px 15px;
  border-radius: 5px;
  font-size: ${RFValue(18)}px;
  font-family: ${(props: themeType) => props.theme.fonts.title};
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  color: ${(props: themeType) => props.theme.colors.primary};
  width: 100%;
`;
export const Label = styled.Text`
  margin-top: 5px;
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
export const Alert = styled.Text`
  margin-top: 5px;
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  color: ${(props: themeType) => props.theme.colors.accent};
`;
