import { CSSProperties } from '@emotion/serialize';
import styled from '@emotion/styled';
import React from 'react';

interface Props {
  component?: React.ElementType;
  children: React.ReactNode | string;
  wrapperStyle?: CSSProperties | React.CSSProperties;
}

export const Box = ({ component, children, wrapperStyle, ...rest }: Props & React.Attributes) => {
  return (
    <BoxComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </BoxComponent>
  );
};

export const Header = ({ component, children, wrapperStyle, ...rest }: Props & React.Attributes) => {
  return (
    <HeaderComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </HeaderComponent>
  );
};

export const Typo = ({ component, children, wrapperStyle, ...rest }: Props & React.Attributes) => {
  return (
    <TypoComponent as={component} wrapperStyle={wrapperStyle} {...rest}>
      {children}
    </TypoComponent>
  );
};

const TypoComponent = styled.div<{ wrapperStyle: CSSProperties | undefined }>`
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;
const HeaderComponent = styled.h2<{ wrapperStyle: CSSProperties | undefined }>`
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;
const BoxComponent = styled.div<{ wrapperStyle: CSSProperties | undefined }>`
  ${({ wrapperStyle }) => ({ ...wrapperStyle })}
`;
