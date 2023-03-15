import { Box, Header, IconButton, Typo } from 'components/ui/Element';
import React from 'react';
import { Colors } from 'utils/Constants';

const Home = () => {
  return (
    <Box
      component={'section'}
      wrapperStyle={{
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
        wrapperStyle={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Box
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'start',
            flexDirection: 'column',
            gap: '4px',
          }}>
          <Typo
            wrapperStyle={{
              fontSize: 22,
              fontWeight: 700,
            }}>
            <Typo
              component={'span'}
              wrapperStyle={{
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
            wrapperStyle={{
              fontSize: 22,
              fontWeight: 700,
            }}>
            받은 세뱃돈은
          </Typo>
          <Typo
            wrapperStyle={{
              fontSize: 22,
              fontWeight: 700,
            }}>
            총&nbsp;
            <Typo
              component={'span'}
              wrapperStyle={{
                color: Colors.mainColor,
              }}>
              25,000
            </Typo>
            원입니다!
          </Typo>
        </Box>
        <Box
          wrapperStyle={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
          }}>
          <IconButton
            wrapperStyle={{
              width: 60,
              height: 60,
              padding: 0,
              backgroundImage: `url('/assets/common-btn_sprites.png')`,
              backgroundPosition: '205px 285px',
            }}>
            <Typo className={'sr-only'}>링크복사</Typo>
          </IconButton>
          <IconButton
            wrapperStyle={{
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
        wrapperStyle={{
          paddingTop: '33px',
        }}>
        <Box
          wrapperStyle={{
            width: 330,
            height: 330,
            backgroundImage: `url('/assets/home-bg.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
