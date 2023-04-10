import { CSSObject } from '@emotion/react';
import { Button, Typo } from 'components/ui/Element';
import React, { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { Colors } from 'utils/Constants';

interface Props {
  sx?: CSSObject;
  labelStyle?: CSSObject;
  children: React.ReactNode;
  IconComponent?: React.ReactNode;
  iconAlign?: 'left' | 'right';
}

const DefaultButton = ({
  children,
  IconComponent,
  iconAlign,
  labelStyle,
  sx,
  ...rest
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      component={'button'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '330px',
        height: '50px',
        border: 0,
        borderRadius: '3px',
        gap: '10px',

        transition: 'background 300ms ease',
        backgroundColor: Colors.mainColor,
        '&:hover': {
          transition: 'background 300ms ease',
          backgroundColor: Colors.darkMainColor,
        },
        ...sx,
      }}
      {...rest}>
      {IconComponent && iconAlign === 'left' && IconComponent}
      <Typo
        sx={{
          color: Colors.fontColor,
          fontSize: 16,
          fontWeight: 400,
          ...labelStyle,
        }}>
        {children}
      </Typo>
      {IconComponent && iconAlign === 'right' && IconComponent}
    </Button>
  );
};

export default DefaultButton;
