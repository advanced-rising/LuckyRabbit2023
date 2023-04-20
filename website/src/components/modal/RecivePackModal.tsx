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

const RecivePackModal = ({
  modalOpen,
  onClose,
  props,
}: {
  modalOpen: boolean;
  onClose: () => void;
  props: { onClick: () => void; cost: number; username: string };
}) => {
  const { onClick, username, cost } = props;
  return (
    <Box
      onClick={() => {
        onClick();
        onClose();
      }}>
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
              backgroundImage: `url(/assets/modal-money_bg.png)`,
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
            <Typo sx={{ fontSize: 18, fontWeight: 700 }}>와! 세뱃돈이다! 🥰</Typo>
            <Typo
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                textAlign: 'center',
                wordBreak: 'keep-all',
              }}>
              {username}님이 소중한 {cost.toLocaleString()}원을 보내셨어요! 얼른 지갑에 넣어요!
            </Typo>
          </Box>
          <Box sx={{ position: 'absolute', bottom: 0 }}>
            <DefaultButton
              onClick={() => {
                onClick();
                onClose();
              }}>
              닫기
            </DefaultButton>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'fixed', top: 0, backgroundColor: '#00000022', width: '100vw', height: '100vh' }} />
    </Box>
  );
};

export default RecivePackModal;
