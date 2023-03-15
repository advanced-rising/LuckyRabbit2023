import { Button } from 'components/ui/Element';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const DefaultButton = ({ children }: Props) => {
  return (
    <Button component={'button'} wrapperStyle={{ width: '330px', height: '50px' }}>
      {children}
    </Button>
  );
};

export default DefaultButton;
