import { keyframes } from '@emotion/react';
import DefaultButton from 'components/button/DefaultButton';
import { Box, Typo } from 'components/ui/Element';
import React from 'react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const SuccessCopyModal = ({ modalOpen, onClose }: { modalOpen: boolean; onClose: () => void }) => {
  return (
    <Box onClick={() => onClose()}>
      <Box
        sx={{
          position: 'fixed',
          zIndex: '9999',
          width: 'auto',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Box
          sx={{
            width: '330px',
            height: '124px',
            backgroundColor: '#ffff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              width: '100%',
              padding: '25px 0',
            }}>
            <Typo sx={{ fontSize: 20, fontWeight: 700 }}>🥕 링크 복사 완료! 🥕</Typo>
          </Box>
          <Box sx={{ position: 'absolute', bottom: 0 }}>
            <DefaultButton onClick={() => onClose()}>닫기</DefaultButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'fixed', top: 0, backgroundColor: '#00000022', width: '100vw', height: '100vh' }} />
    </Box>
  );
};

export default SuccessCopyModal;
