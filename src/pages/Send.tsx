import styled from '@emotion/styled';
import DefaultButton from 'components/button/DefaultButton';
import DefaultFormField from 'components/input/DefaultFormField';
import DashboardLayout from 'components/layout/DashboardLayout';
import SuccessSendModal from 'components/modal/SuccessSendModal';
import { Box, Typo } from 'components/ui/Element';
import useModals from 'hooks/shared/useModals';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Colors } from 'utils/Constants';

const Send = () => {
  const navigate = useNavigate();
  const { openModal } = useModals();

  const sendFanny = () => {
    openModal(SuccessSendModal, { props: {} });
  };

  return (
    <DashboardLayout
      back={() => navigate('/select')}
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
            <Box sx={{ width: 'auto', minWidth: '200px', position: 'relative' }}>
              <DefaultFormField
                containerStyle={{ width: 'auto', paddingTop: '100px' }}
                sx={{
                  width: 'auto',

                  paddingLeft: '30px',
                  fontSize: 18,
                  fontWeight: 700,
                  color: Colors.subTextB,
                }}
              />
              <Typo
                sx={{
                  position: 'absolute',
                  bottom: '6px',
                  left: 0,
                  fontSize: 18,
                  fontWeight: 700,
                  color: Colors.subTextB,
                }}>
                To.
              </Typo>
            </Box>
            <Box sx={{ paddingTop: '20px' }}>
              <TextArea />
              <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'end', gap: '8px', paddingTop: '10px' }}>
                <Typo
                  sx={{
                    textAlign: 'end',
                    fontSize: 18,
                    fontWeight: 700,
                    color: Colors.subTextB,
                    paddingBottom: '8px',
                  }}>
                  From. 익명이
                </Typo>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    backgroundImage: `url('/assets/yellow_cat.png')`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ paddingTop: '40px' }}>
            <DefaultButton sx={{}} onClick={sendFanny}>
              보내기
            </DefaultButton>
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
  /* background-color: #fff; */
  overflow-y: hidden;
`;
