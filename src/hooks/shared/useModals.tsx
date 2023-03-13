import { closeModal, openModal } from '@redux/slices/ui';
import { useAppDispatch } from '@redux/storeHooks';

import { ElementType } from 'react';

export default function useModals() {
  const dispatch = useAppDispatch();

  const _openModal = (Component: ElementType, props: any) => {
    dispatch(openModal({ Component, props }));
  };

  const _closeModal = (Component: ElementType) => {
    dispatch(closeModal({ Component }));
  };

  return {
    openModal: _openModal,
    closeModal: _closeModal,
  };
}
