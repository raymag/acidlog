import styled from 'styled-components/native';
import {themeType} from '../../global/theme';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props: themeType) => props.theme.colors.grayish};
`;

export const Content = styled.View`
  margin: 20px 0;
  padding: 30px 10px;
`;
