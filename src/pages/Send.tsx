import DefaultButton from 'components/button/DefaultButton';
import {
  BlueFannyPack,
  GreenFannyPack,
  OrangeFannyPack,
  RedFannyPack,
  YellowFannyPack,
} from 'components/Icons/FannyPacks';
import { Money1000, Money10000, Money5000, Money50000, MoneyNot } from 'components/Icons/Money';
import DashboardLayout from 'components/layout/DashboardLayout';
import { Box, IconButton, Typo } from 'components/ui/Element';
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
      <Box component={'section'}>
        <Box component={'article'} sx={{ paddingTop: '30px' }}>
          <Box
            sx={{
              width: 330,
              height: 285,
              backgroundImage: `url('/assets/pocket-select-box-bg.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
                paddingTop: '48px',
              }}>
              <Box>
                <IconButton>
                  <RedFannyPack />
                </IconButton>
                <IconButton>
                  <BlueFannyPack />
                </IconButton>
                <IconButton>
                  <GreenFannyPack />
                </IconButton>
              </Box>
              <Box>
                <IconButton>
                  <YellowFannyPack />
                </IconButton>
                <IconButton>
                  <OrangeFannyPack />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box component={'article'} sx={{ paddingTop: '64px' }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              gap: '15px',
            }}>
            <Box>
              <IconButton sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}>
                <Money1000 />
              </IconButton>
              <IconButton sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}>
                <Money5000 />
              </IconButton>
              <IconButton sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}>
                <Money10000 />
              </IconButton>
            </Box>
            <Box>
              <IconButton sx={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25))' }}>
                <Money50000 />
              </IconButton>
              <IconButton>
                <MoneyNot />
              </IconButton>
            </Box>
          </Box>
        </Box>
        <Box sx={{ paddingTop: '45px' }} component={'article'}>
          <DefaultButton>다음</DefaultButton>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Send;
