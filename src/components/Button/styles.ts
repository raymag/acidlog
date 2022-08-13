import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {themeType} from '../../global/theme';

export const Content = styled.View`
  margin-top: 60px;
  background: ${(props: themeType) => props.theme.colors.dark};
  padding: 10px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.Text`
  color: ${(props: themeType) => props.theme.colors.primary};
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  text-transform: uppercase;
`;
