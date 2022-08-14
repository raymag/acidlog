import React from 'react';
import LoadingIcon from '..//LoadingIcon';
import {Veil} from './styles';

const LoadingVeil = () => {
  return (
    <Veil>
      <LoadingIcon size={120} />
    </Veil>
  );
};

export default LoadingVeil;
