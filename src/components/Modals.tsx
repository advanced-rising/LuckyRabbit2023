import { useState } from 'react';
import { keyframes } from '@emotion/react';
import { useAppSelector } from 'redux/storeHooks';
import useModals from 'hooks/shared/useModals';
import { createPortal } from 'react-dom';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export interface AnimationTypes {
  isAnimation: boolean;
  animationTime: number;
  animation: string;
  transition: string;
}

const Modals = () => {
  const openedModals = useAppSelector((state) => state.ui.openedModals);
  const { closeModal } = useModals();

  const ANIMATION_TIME = 150;

  const [fade, setFade] = useState<AnimationTypes>({
    isAnimation: false,
    animationTime: ANIMATION_TIME,
    animation: `${fadeOut} ${ANIMATION_TIME}ms ease-out`,
    transition: `visibility ${ANIMATION_TIME}ms ease-out`,
  });

  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const onClose = () => {
          setFade({ ...fade, isAnimation: true });
          setTimeout(() => {
            setFade({ ...fade, isAnimation: false });
            closeModal(Component);
          }, ANIMATION_TIME);
        };
        return createPortal(
          <Component key={index} modalOpen onClose={onClose} fade={fade} {...props} />,
          document.getElementById('root') as HTMLElement,
        );
      })}
    </>
  );
};

export default Modals;
