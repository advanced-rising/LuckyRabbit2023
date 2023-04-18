/* eslint-disable @next/next/no-img-element */
import DefaultButton from 'components/button/DefaultButton';
import DashboardLayout from 'components/layout/DashboardLayout';
import SuccessCopyModal from 'components/modal/SuccessCopyModal';
import { Box, IconButton, Typo } from 'components/ui/Element';
import usePacksQuery from 'hooks/queries/usePacks';
import useUserQuery from 'hooks/queries/useUserQuery';
import useCopyToClipboard from 'hooks/shared/useCopyToClipboard';
import useModals from 'hooks/shared/useModals';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Colors } from 'utils/Constants';

const Home = () => {
  const navigate = useNavigate();

  const [, copy] = useCopyToClipboard();

  const { openModal } = useModals();

  const _onCopy = async () => {
    try {
      await copy(window?.location.href);

      openModal(SuccessCopyModal, { props: {} });
    } catch (error) {
      console.log(error);
    }
  };

  const { data: me } = useUserQuery();



  return (
    <DashboardLayout>
      <Box
        component={'section'}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: '50px',
          paddingLeft: '30px',
          paddingRight: '30px',
        }}>
        <Box
          component={'article'}
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'start',
              alignItems: 'start',
              flexDirection: 'column',
              gap: '4px',
            }}>
            <Typo
              sx={{
                fontSize: 22,
                fontWeight: 700,
              }}>
              <Typo
                component={'span'}
                sx={{
                  position: 'relative',
                  '&::after': {
                    display: 'block',
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '2px',
                    backgroundColor: Colors.subTextB,
                  },
                }}>
                신현우
              </Typo>
              님!
            </Typo>
            <Typo
              sx={{
                fontSize: 22,
                fontWeight: 700,
              }}>
              받은 세뱃돈은
            </Typo>
            <Typo
              sx={{
                fontSize: 22,
                fontWeight: 700,
              }}>
              총&nbsp;
              <Typo
                component={'span'}
                sx={{
                  color: Colors.mainColor,
                }}>
                25,000
              </Typo>
              원입니다!
            </Typo>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}>
            <IconButton
              onClick={() => _onCopy()}
              sx={{
                width: 60,
                height: 60,
                padding: 0,
                backgroundImage: `url('/assets/common-btn_sprites.png')`,
                backgroundPosition: '205px 285px',
              }}>
              <Typo className={'sr-only'}>링크복사</Typo>
            </IconButton>
            <IconButton
              sx={{
                width: 60,
                height: 60,
                padding: 0,
                backgroundImage: `url('/assets/common-btn_sprites.png')`,
                backgroundPosition: '-14px 514px',
              }}>
              <Typo className={'sr-only'}>로그아웃</Typo>
            </IconButton>
          </Box>
        </Box>

        <Box
          component={'article'}
          sx={{
            paddingTop: '33px',
          }}>
          <Box
            sx={{
              width: 330,
              height: 330,
              backgroundImage: `url('/assets/home-bg.png')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Box>

        <Box component={'article'} sx={{ width: '100%', paddingTop: '40px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '20px',
            }}>
            <DefaultButton onClick={() => navigate('/list')}>받은 복주머니 보러가기</DefaultButton>
            <Typo>복주머니 보내기를 연습해보세요! 🐰</Typo>
            <DefaultButton IconComponent={<Icon />} iconAlign='left' onClick={() => navigate('/select')}>
              달토끼에게 복주머니 보내기
            </DefaultButton>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Home;

const Icon = () => {
  return <img src={'/assets/icon-moon.png'} width={20} height={20} alt={'moon'} />;
};
