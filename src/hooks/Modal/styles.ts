import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {themeType} from '../../global/theme';

export const ModalVeil = styled.View`
  flex: 5;
  background: #222222dd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalView = styled.View`
  background: ${(props: themeType) => props.theme.colors.white};
  padding: 20px;
  border-radius: 5px;
  min-width: 80%;
`;
export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${(props: themeType) => props.theme.fonts.title};
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props: themeType) => props.theme.colors.grayish};
`;
export const Body = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${(props: themeType) => props.theme.fonts.content};
  font-weight: regular;
  color: ${(props: themeType) => props.theme.colors.grayish};
  margin-top: 10px;
  opacity: 0.8;
  padding-top: 5px;
  border: solid 2px transparent;
  border-top-color: ${(props: themeType) => props.theme.colors.primaryWatered};
`;
export const Actions = styled.View`
  margin-top: 30px;
`;
