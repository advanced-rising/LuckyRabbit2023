import { Button } from 'components/ui/Element';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const DefaultButton = ({ children }: Props) => {
  return (
    <Button component={'button'} sx={{ width: '330px', height: '50px' }}>
      {children}
    </Button>
  );
};

export default DefaultButton;
