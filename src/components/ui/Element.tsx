import { CSSObject } from '@emotion/serialize';
import styled from '@emotion/styled';
import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface Props extends React.HTMLAttributes<Element> {
  component?: React.ElementType;
  children?: React.ReactNode | string;
  sx?: CSSObject;
  register?: UseFormRegisterReturn;
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
// htmlinputelement typescript react
export const Input = ({
  component,
  children,
  sx,
  register,
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputComponent as={component} sx={sx} {...register} {...rest}>
      {children}
    </InputComponent>
  );
};

export const Label = ({ component, children, sx, ...rest }: Props & LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <LabelComponent as={component} sx={sx} {...rest}>
      {children}
    </LabelComponent>
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

const IconButtonComponent = styled.button<{ sx: CSSObject | undefined }>`
  border: 0;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  ${({ sx }) => ({ ...sx })}
`;

const ButtonComponent = styled.button<{ sx: CSSObject | undefined }>`
  cursor: pointer;
  ${({ sx }) => ({ ...sx })};
`;

const InputComponent = styled.input<{ sx: CSSObject | undefined }>`
  ${({ sx }) => ({ ...sx })}
`;

const LabelComponent = styled.label<{ sx: CSSObject | undefined }>`
  ${({ sx }) => ({ ...sx })}
`;
