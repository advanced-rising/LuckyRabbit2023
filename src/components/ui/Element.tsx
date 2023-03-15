import { CSSObject } from '@emotion/serialize';
import styled from '@emotion/styled';
import React from 'react';

interface Props extends React.HTMLAttributes<Element> {
  component?: React.ElementType;
  children?: React.ReactNode | string;
  wrapperStyle?: CSSObject;
}

export const Box = ({ component, children, wrapperStyle, ...rest }: Props) => {
  return (
    <BoxComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </BoxComponent>
  );
};

export const Header = ({ component, children, wrapperStyle, ...rest }: Props) => {
  return (
    <HeaderComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </HeaderComponent>
  );
};

export const Typo = ({ component, children, wrapperStyle, ...rest }: Props) => {
  return (
    <TypoComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </TypoComponent>
  );
};

export const Button = ({ component, children, wrapperStyle, ...rest }: Props & React.Attributes) => {
  return (
    <ButtonComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </ButtonComponent>
  );
};

export const IconButton = ({ component, children, wrapperStyle, ...rest }: Props) => {
  return (
    <IconButtonComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </IconButtonComponent>
  );
};

const BoxComponent = styled.div<{ wrapperStyle: CSSObject | undefined }>`
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;

const HeaderComponent = styled.h2<{ wrapperStyle: CSSObject | undefined }>`
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;

const TypoComponent = styled.p<{ wrapperStyle: CSSObject | undefined }>`
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;

const IconButtonComponent = styled.button<{ wrapperStyle: CSSObject | undefined }>`
  border: 0;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;

const ButtonComponent = styled.div<{ wrapperStyle: CSSObject | undefined }>`