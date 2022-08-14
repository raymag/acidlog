export const Veil = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props: themeType) => props.theme.colors.grayish};
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
