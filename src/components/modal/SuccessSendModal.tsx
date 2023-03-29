import { keyframes } from '@emotion/react';
import { Box } from 'components/ui/Element';
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
    <Box onClick={() => onClose()} sx={{ animation: modalOpen ? 'fadeIn 0.5s ease-in-out' : '' }}>
      <Box
        sx={{
          position: 'fixed',
          zIndex: '9999',
          width: 'auto',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
        <Box sx={{ width: '330px', height: '373px', backgroundColor: '#ffff' }}></Box>
      </Box>
      <Box sx={{ position: 'fixed', top: 0, backgroundColor: '#00000022', width: '100vw', height: '100vh' }} />
    </Box>
  );
};

export default SuccessSendModal;
