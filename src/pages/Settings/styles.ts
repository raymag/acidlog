import styled from 'styled-components/native';
import {themeType} from '../../global/theme';

export const Container = styled.View`
  min-height: 100%;
  background: ${(props: themeType) => props.theme.colors.grayish};
`;
