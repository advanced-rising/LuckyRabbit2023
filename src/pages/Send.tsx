import styled from '@emotion/styled';
import DefaultFormField from 'components/input/DefaultFormField';
import DashboardLayout from 'components/layout/DashboardLayout';
import { Box, Typo } from 'components/ui/Element';
import React from 'react';
import { Colors } from 'utils/Constants';

const Send = () => {
  return (
    <DashboardLayout
      back
      title={
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.subTextB }}>
            <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.mainColor }}>
              복주머니
            </Typo>
            와&nbsp;
            <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.mainColor }}>
              세뱃돈
            </Typo>
            을
          </Typo>
          <Typo component={'span'} sx={{ fontSize: 25, fontWeight: 700, color: Colors.subTextB }}>
            선택해주세요!
          </Typo>
        </Box>
      }>
      <Box component={'section'} sx={{ padding: '0 30px' }}>
        <Box component={'article'} sx={{ paddingTop: '30px' }}>
          <Box
            sx={{
              width: 330,
              height: 500,
              backgroundImage: `url('/assets/letter-yellow_bg.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              padding: '30px',
            }}>
            <DefaultFormField label='' containerStyle={{ paddingTop: '100px' }} />
            <TextArea />
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Send;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  resize: none;
  background-color: transparent;
  overflow-y: hidden;
`;
