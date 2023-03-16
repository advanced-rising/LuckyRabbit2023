import { CSSObject } from '@emotion/react';
import { Button } from 'components/ui/Element';
import React from 'react';

interface Props {
  sx?: CSSObject;
  children: React.ReactNode;
}

const DefaultButton = ({ children, sx }: Props) => {
  return (
    <Button component={'button'} sx={{ width: '100%', maxWidth: 330, height: '50px', ...sx }}>
      {children}
    </Button>
  );
};

export default DefaultButton;
