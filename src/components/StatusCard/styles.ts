import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {themeType} from '../../global/theme';

export const Container = styled.View`
  background: ${(props: themeType) => props.theme.colors.dark};
  padding: 10px;
  border-radius: 5px;
`;
export const Title = styled.Text`
  color: ${(props: themeType) => props.theme.colors.primary};
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;
export const Subtitle = styled.Text`
  color: ${(props: themeType) => props.theme.colors.primaryWatered};
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;
export const Header = styled.View`
  margin-bottom: 20px;
`;
export const Body = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 10px;
  margin-bottom: 25px;
`;
export const ProfileImage = styled.View`
  width: 100px;
  height: 100px;
  max-width: 40%;
  background: ${(props: themeType) => props.theme.colors.dark};
  border-radius: 75px;
  border: solid 3px ${(props: themeType) => props.theme.colors.primary};
`;
export const Message = styled.View`
  margin-left: 20px;
  word-wrap: break-word;
  width: 60%;
`;
export const TitleMessage = styled.Text`
  color: ${(props: themeType) => props.theme.colors.primary};
  font-size: ${RFValue(16)}px;
  font-weight: bold;
`;
export const TextMessage = styled.Text`
  color: ${(props: themeType) => props.theme.colors.primary};
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;
export const Footer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const FooterText = styled.Text`
  color: ${(props: themeType) => props.theme.colors.primaryWatered};
  font-size: ${RFValue(12)}px;
  font-weight: bold;
`;
