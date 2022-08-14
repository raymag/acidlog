import React from 'react';
import {
  Bar,
  Title,
  Hamburger,
  HamburgerIconLine,
  Cross,
  CrossLine,
} from './styles';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

type NavbarProps = {
  title: string;
  withCloseIcon?: boolean;
};

const Navbar = ({title, withCloseIcon = false}: NavbarProps) => {
  const {navigate, goBack} = useNavigation<any>();
  const theme = useTheme();
  return (
    <Bar>
      <Title>{title}</Title>

      {withCloseIcon ? (
        <Cross
          onPress={() => goBack()}
          style={({pressed}: any) => [
            {
              translateY: pressed ? 1 : 0,
            },
          ]}>
          {({pressed}: any) => (
            <>
              <CrossLine pressed={pressed} />
              <CrossLine pressed={pressed} reversed />
            </>
          )}
        </Cross>
      ) : (
        <Hamburger
          onPress={() => navigate('Settings')}
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
      )}
    </Bar>
  );
};

export default Navbar;
