import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {themeType} from '../../global/theme';

export const Bar = styled.View`
  background: ${(props: themeType) => props.theme.colors.dark};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  min-height: 60px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${(props: themeType) => props.theme.colors.primary};
  font-weight: bold;
`;
export const Hamburger = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 25px;
`;
export const HamburgerIconLine = styled.View`
  width: 40px;
  height: 5px;
  background: ${(props: themeType) => props.theme.colors.dark};
`;
