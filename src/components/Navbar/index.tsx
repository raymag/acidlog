import React from 'react';
import {Bar, Title, Hamburger, HamburgerIconLine} from './styles';
import {useTheme} from 'styled-components';

type NavbarProps = {
  title: string;
};

const Navbar = ({title}: NavbarProps) => {
  const theme = useTheme();
  return (
    <Bar>
      <Title>{title}</Title>
      <Hamburger
        style={({pressed}: any) => [
          {
            backgroundColor: pressed
              ? theme.colors.primaryWatered
              : theme.colors.primary,
            translateY: pressed ? 1 : 0,
          },
        ]}>
        <HamburgerIconLine />
        <HamburgerIconLine />
      </Hamburger>
    </Bar>
  );
};

export default Navbar;
