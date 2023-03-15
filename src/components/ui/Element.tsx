import { CSSObject } from '@emotion/serialize';
import styled from '@emotion/styled';
import React from 'react';

interface Props extends React.HTMLAttributes<Element> {
  component?: React.ElementType;
  children?: React.ReactNode | string;
  sx?: CSSObject;
}

export const Box = ({ component, children, sx, ...rest }: Props) => {
  return (
    <BoxComponent as={component} sx={sx} {...rest}>
      {children}
    </BoxComponent>
  );
};

export const Header = ({ component, children, sx, ...rest }: Props) => {
  return (
    <HeaderComponent as={component} sx={sx} {...rest}>
      {children}
    </HeaderComponent>
  );
};

export const Typo = ({ component, children, sx, ...rest }: Props) => {
  return (
    <TypoComponent as={component} sx={sx} {...rest}>
      {children}
    </TypoComponent>
  );
};

export const Button = ({ component, children, sx, ...rest }: Props) => {
  return (
    <ButtonComponent as={component} sx={sx} {...rest}>
      {children}
    </ButtonComponent>
  );
};

export const IconButton = ({ component, children, sx, ...rest }: Props) => {
  return (
    <IconButtonComponent as={component} sx={sx} {...rest}>
      {children}
    </IconButtonComponent>
  );
};

const BoxComponent = styled.div<{ sx: CSSObject | undefined }>`
  ${({ sx }) => ({ ...sx })}
`;

const HeaderComponent = styled.h2<{ sx: CSSObject | undefined }>`
  ${({ sx }) => ({ ...sx })}
`;

const TypoComponent = styled.p<{ sx: CSSObject | undefined }>`
  ${({ sx }) => ({ ...sx })}
`;
const ButtonComponent = styled.div<{ wrapperStyle: CSSProperties | undefined }>`
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;

const IconButtonComponent = styled.button<{ sx: CSSObject | undefined }>`
  border: 0;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  ${({ sx }) => ({ ...sx })}
`;

const ButtonComponent = styled.div<{ sx: CSSObject | undefined }>`
  ${({ sx }) => ({ ...sx })}
`;
