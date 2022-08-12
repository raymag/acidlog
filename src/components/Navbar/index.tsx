import React from 'react';
import {Bar, Title, Hamburger, HamburgerIconLine} from './styles';
import {Button} from 'react-native';

type NavbarProps = {
  title: string;
};

const Navbar = ({title}: NavbarProps) => {
  return (
    <Bar>
      <Title>{title}</Title>
      <Hamburger>
        <HamburgerIconLine />
        <HamburgerIconLine />
        <HamburgerIconLine />
      </Hamburger>
    </Bar>
  );
};

export default Navbar;
