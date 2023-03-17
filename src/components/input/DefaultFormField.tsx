import { Box, Input, Label } from 'components/ui/Element';
import React, { InputHTMLAttributes } from 'react';
import { Colors } from 'utils/Constants';
import { CSSObject } from '@emotion/serialize';

interface Props {
  label: string;
  sx?: CSSObject;
  containerStyle?: CSSObject;
}

const DefaultFormField = ({ containerStyle, label, sx, ...rest }: Props & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Box component={'div'} sx={{ display: 'block', padding: '0 30px 40px', ...containerStyle }}>
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
        {...rest}
      />
    </Box>
  );
};

export default DefaultFormField;
