import { Box, Input, Label } from 'components/ui/Element';
import React, { InputHTMLAttributes } from 'react';
import { Colors } from 'utils/Constants';
import { CSSObject } from '@emotion/serialize';
import styled from '@emotion/styled';
import { UseFormRegister, FieldValues, UseFormRegisterReturn } from 'react-hook-form';
import FormInput from 'types/FormDto';

interface Props {
  label: string;
  sx?: CSSObject;
  containerStyle?: CSSObject;
  register?: UseFormRegisterReturn;
}

export const ValidationErrorText = styled.div`
  color: ${Colors.warningColor};
  font-size: 14px;
  margin-top: 5px;
  padding-left: 2px;
  word-break: keep-all;
`;

const DefaultFormField = ({
  containerStyle,
  label,
  sx,
  register,
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Box component={'div'} sx={{ display: 'block', ...containerStyle }}>
      <Label component={'label'} htmlFor={rest.id}>
        {label}
      </Label>
      <Input
        id={rest.id}
        component={'input'}
        sx={{
          width: '100%',
          height: '32px',
          backgroundColor: 'transparent',
          borderBottom: `1px solid ${Colors.mainTitleColor}`,
          marginTop: '16px',
          paddingLeft: '2px',
          ...sx,
        }}
        register={register}
        {...rest}
      />
      <ValidationErrorText>123</ValidationErrorText>
    </Box>
  );
};

export default DefaultFormField;
