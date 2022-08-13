import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {themeType} from '../../global/theme';

export const Text = styled.Text`
  font-weight: bold;
  font-size: ${RFValue(20)}px;
  text-transform: uppercase;
  color: ${(props: any) => props.color};
`;

export const BaseButton = styled.Pressable`
  margin-top: 60px;
  background: ${(props: themeType) => props.theme.colors.primary};
  padding: 10px 0;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 3px;
`;
