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

const SuccessSendModal = ({ modalOpen, onClose }: { modalOpen: boolean; onClose: () => void }) => {
  return (
    <Box onClick={() => onClose()} sx={{ animation: modalOpen ? `${fadeIn} 0.5s ease-in-out` : '' }}>
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
            height: '373px',
            backgroundColor: '#ffff',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '5px',
          }}>
          <Box
            sx={{
              width: '100%',
              height: 220,
              backgroundImage: `url(/assets/modal-sending-letter-bg.png)`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}></Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '10px',
              padding: '0 48px',
            }}>
            <Typo sx={{ fontSize: 18, fontWeight: 700 }}>띵동~ 복주머니 배달 완료! 🚀</Typo>
            <Typo
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                textAlign: 'center',
                wordBreak: 'keep-all',
              }}>
              성공적으로 복주머니를 전달했습니다! 보내신 분께 링크를 공유해주세요!
            </Typo>
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

export default SuccessSendModal;
